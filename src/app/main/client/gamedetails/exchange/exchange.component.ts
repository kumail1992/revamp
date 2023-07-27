import { Location } from "@angular/common";
import { ActivatedRoute, Route } from "@angular/router";
import { StorageService } from "./../../../shared/services/storage.service";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription, finalize, tap } from "rxjs";
import {
  PokerCasinoRequest,
  QtechGameRequest,
} from "src/app/main/shared/models/models";
import { BackendService } from "src/app/main/shared/services/backend.service";
import { NotificationService } from "src/app/main/shared/services/notification.service";

@Component({
  selector: "app-exchange",
  templateUrl: "./exchange.component.html",
  styleUrls: ["./exchange.component.scss"],
})
export class ExchangeComponent implements OnInit, OnDestroy {
  gameId!: string;
  mode!: string;
  subscriptions: Subscription[] = [];
  deviceType!: string;
  safeSrc: string = "";
  token!: string;
  isLoading: boolean = false;
  isDemo: boolean = false;
  constructor(
    private storageService: StorageService,
    private route: ActivatedRoute,
    private backend: BackendService,
    private notify: NotificationService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.subscriptions.push(
      this.storageService.getTokenObservable().subscribe((token) => {
        if (token) {
          this.token = token;
          this.isDemo = false;
        } else {
          this.isDemo = true;
        }
      })
    );
    this.subscriptions.push(
      this.storageService
        .getDeviceType()
        .subscribe((deviceType) => (this.deviceType = deviceType))
    );
    this.subscriptions.push(
      this.route.params.subscribe({
        next: (res) => {
          this.gameId = res["id"];
          this.mode = res["mode"];
          this.loadIframe();
        },
      })
    );
  }

  loadIframe() {
    this.safeSrc = "";
    if (
      this.mode === "casino" ||
      this.mode === "provider" ||
      this.gameId === "SPB-aviator"
    ) {
      this.qTechGameLoader();
      return;
    }
    if (this.mode && this.mode.includes("table-")) {
      const tableIdString = this.mode.split("table-");
      if (tableIdString.length > 1) this.qTechGameLoader(tableIdString[1]);
      return;
    }
    if (this.mode == "BR" || this.gameId === "VIRTUAL_SPORTS") {
      this.superNovaGameLoader("BR");
      return;
    }
    if (this.mode == "BT" || this.gameId === "Sports_Book") {
      this.superNovaGameLoader("BT");
      return;
    }
    if (this.mode == "Poker" || this.gameId === "POKER_CASINO") {
      this.pokerGameLoader();
      return;
    }
    if (this.mode == "EZ") {
      this.superNovaGameLoader("EZ");
      return;
    }

    switch (this.gameId) {
      case "evolution":
        this.evolutionGameLoader();
        break;

      case "SLOT_GAMES":
        this.qTechGameLoader("", "/games/wl-slots/wl.games.slots");
        break;

      case "LIVE_CASINO":
        this.qTechGameLoader(
          "",
          "/games/wl-liveCasinoGames/wl.games.liveCasinoGames"
        );
        break;

      case "LOTTERY_GAMES":
        this.qTechGameLoader(
          "",
          "/games/wl-lotteryGames/wl.games.lotteryGames"
        );
        break;

      case "SCRATCH_CARDS":
        this.qTechGameLoader(
          "",
          "/games/wl-scratchCardGames/wl.games.scratchCardGames"
        );
        break;

      case "SHOOTING_GAMES":
        this.qTechGameLoader(
          "",
          "/games/wl-shootingGames/wl.games.shootingGames"
        );
        break;

      case "INSTANT_WIN":
        this.qTechGameLoader(
          "",
          "/games/wl-instantWinGames/wl.games.instantWinGames"
        );
        break;

      case "HOT_GAMES":
        this.qTechGameLoader(
          "",
          "/games/wl-instantWinGames/wl.games.instantWinGames"
        );
        break;

      case "TABLE_GAMES":
        this.qTechGameLoader("", "/games/wl-tableGames/wl.games.tableGames");
        break;

      default:
        this.qTechGameLoader();
        break;
    }
  }

  qTechGameLoader(tableId?: string, innerURL?: string) {
    this.isLoading = true;
    let gameId = "";
    if (innerURL) {
      gameId = "";
    } else if (tableId) {
      gameId = "LIVE_CASINO";
    } else {
      gameId = this.gameId;
    }
    let req = new QtechGameRequest(
      this.token ?? "",
      this.gameId,
      this.isDemo,
      this.deviceType,
      gameId,
      tableId ? tableId : ""
    );
    const endPoint = this.token
      ? this.backend.qtechRequest(req)
      : this.backend.qtechDemoRequest(req);
    endPoint.pipe(finalize(() => (this.isLoading = false))).subscribe({
      next: (r) => {
        {
          if (r.url) {
            if (innerURL) {
              this.safeSrc = r.url + innerURL;
            } else {
              this.safeSrc = r.url;
            }
          } else {
            this.notify.showWarning(r.msg || "Not Saved", r.code);
            this.location.back();
          }
        }
      },
      error: (error) => {
        this.notify.showError(error, "Failed");
      },
    });
  }

  superNovaGameLoader(provider: string) {
    this.isLoading = true;
    let payload: any = {
      token: this.token,
      provider: provider,
    };
    if (provider === "EZ") {
      payload.gameName = this.gameId;
      payload.gameId = this.gameId;
    }
    this.backend
      .getSupernowa(payload)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (x) => {
          if (x.websiteURL) {
            this.safeSrc = x.websiteURL;
          } else {
            this.notify.showWarning("Casino not loaded", "");
            this.location.back();
          }
        },
      });
  }

  pokerGameLoader() {
    this.isLoading = true;
    let payload: any = {
      token: this.token,
      isMobile: this.deviceType == "mobile" ? true : false,
    };
    if (this.mode === "Poker") {
      payload.gameId = this.gameId;
    }
    let req = new PokerCasinoRequest(payload);
    this.backend
      .getPokerCasino(req)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((x) => {
        if (x.url) {
          this.safeSrc = x.url;
        } else {
          this.notify.showWarning("Casino not loaded", "");
          this.location.back();
        }
      });
  }

  evolutionGameLoader() {
    this.isLoading = true;
    this.backend
      .getEvolution({
        token: this.token,
      })
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((x) => {
        if (x.entry) {
          this.safeSrc = x.entry;
        } else {
          this.notify.showWarning("Casino not loaded", "");
          this.location.back();
        }
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
