import { StorageService } from "./shared/services/storage.service";
import { Component, HostListener } from "@angular/core";
import { LoginComponent } from "./shared/components/login/login.component";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { MatDialog } from "@angular/material/dialog";
import { MatDrawerMode } from "@angular/material/sidenav";
import { BottomSheetComponent } from "./shared/components/bottom-sheet/bottom-sheet.component";
import {
  Observable,
  interval,
  map,
  shareReplay,
  switchMap,
  tap,
  catchError,
  timer,
  filter,
  first,
} from "rxjs";
import {
  CheckTokenRequest,
  GetWalletRequest,
  LoginResponse,
} from "./shared/models/models";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { BackendService } from "./shared/services/backend.service";
import { environment } from "src/environment/environment";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent {
  dynamicMode!: MatDrawerMode;
  isDrawerOpen = true;
  userProfile$!: Observable<LoginResponse | null>;
  loginToken$!: Observable<string>;
  initialRoute: string = "landing";
  authData!: any;
  menu!: any[];
  isAuthenticated: boolean = false;
  news$!: Observable<any>;
  wallet$!: Observable<any>;
  isLoading$!: Observable<any>;
  token!: string;
  constructor(
    private _bottomSheet: MatBottomSheet,
    private _dialog: MatDialog,
    private storageService: StorageService,
    private router: Router,
    private route: ActivatedRoute,
    private backend: BackendService
  ) {}

  ngOnInit(): void {
    this.setDrawerConfigs();
    this.initializeMenu();
    this.isLoading$ = this.storageService.getLoadingState().pipe(first());
    this.storageService.setUserProfile(this.storageService.getAuthData());
    this.storageService.setToken(this.storageService.getToken() ?? "");
    this.userProfile$ = this.storageService
      .getUserProfile()
      .pipe(shareReplay());
    this.loginToken$ = this.storageService.getTokenObservable().pipe(
      tap((token) => {
        this.token = token ? token : "";
        this.isAuthenticated = token ? true : false;
        if (this.isAuthenticated) {
          this.getData();
        }
        this.initializeMenu();
      }),
      shareReplay()
    );
  }

  getData() {
    this.getNews();
    this.getWalletDetails();
  }

  getNews() {
    let req = new CheckTokenRequest(this.token);
    this.news$ = this.backend.getNews(req).pipe(shareReplay());
  }

  getWalletDetails() {
    let req = new GetWalletRequest(this.token);
    this.wallet$ = timer(0, environment.walletCallTimer).pipe(
      filter(() => this.isAuthenticated),
      switchMap(() => this.backend.getWallet(req)),
      shareReplay()
    );
  }

  initializeMenu() {
    this.menu = [
      {
        order: 1,
        text: "Kheloyar Exch",
        image: "assets/images/newUiAssets/icons/exchange.svg",
        link: this.isAuthenticated ? "client" : "landing/dashboard",
        option: { exact: this.isAuthenticated ? true : false },
      },
      {
        order: this.isAuthenticated ? 3 : 2,
        text: "Aviator",
        image: "assets/images/newUiAssets/icons/aviator.svg",
        link: "client/gamedetails/SPB-aviator/real",
        option: { exact: false },
      },
      {
        order: this.isAuthenticated ? 2 : 3,
        text: "All Casino",
        image: "assets/images/newUiAssets/icons/all-casino.svg",
        link: "client/newCasino",
        option: { exact: false },
      },
      {
        order: this.isAuthenticated ? 5 : 4,
        text: "Teen Patti",
        image: "assets/images/newUiAssets/icons/teen-patti.svg",
        link: "client/gamedetails/56767/Poker",
        option: { exact: false },
      },
      {
        order: this.isAuthenticated ? 6 : 5,
        text: "Slot Game",
        image: "assets/images/newUiAssets/icons/slot.svg",
        link: "client/gamedetails/SLOT_GAMES/real",
        option: { exact: false },
      },
      {
        order: this.isAuthenticated ? 7 : 6,
        text: "Table Game",
        image: "assets/images/newUiAssets/icons/table-games.svg",
        link: "client/tableGames",
        option: { exact: false },
      },
      {
        order: this.isAuthenticated ? 9 : 7,
        text: "Instant Win",
        image: "assets/images/newUiAssets/icons/instant-win.svg",
        link: "client/gamedetails/INSTANT_WIN/real",
        option: { exact: false },
      },
      {
        order: 8,
        text: "Shooting Game",
        image: "assets/images/newUiAssets/icons/shooting.svg",
        link: "client/gamedetails/SHOOTING_GAMES/real",
        option: { exact: false },
      },
      {
        order: this.isAuthenticated ? 4 : 9,
        text: "Live Casino",
        image: "assets/images/newUiAssets/icons/live-casino.svg",
        link: "client/gamedetails/LIVE_CASINO/real",
        option: { exact: false },
      },
      {
        order: 10,
        text: "Virtual Sports",
        image: "assets/images/newUiAssets/icons/virtual-sports.svg",
        link: "client/gamedetails/VIRTUAL_SPORTS/BR",
        option: { exact: false },
      },
      {
        order: 11,
        text: "Indian Casino",
        image:
          "https://ncdn.kheloyaar.club/assets/images/exchange/newIcons/Indian Casino.svg",
        link: "client/gamedetails/POKER_CASINO/aura",
        option: { exact: false },
      },
    ];
  }

  @HostListener("window:resize", ["$event"])
  onReSize() {
    this.setDrawerConfigs();
  }

  onOpenBottomMenu() {
    this._bottomSheet.open(BottomSheetComponent, {
      panelClass: "theme-bottom-wrapper",
      data: this.menu,
    });
  }

  /**
   * @name setDrawerConfig
   * @desc Sets drawer configuration as per
   * meta detected
   * @return {void}
   */
  setDrawerConfigs(): void {
    if (window.innerWidth <= 992) {
      this.dynamicMode = "over";
      this.isDrawerOpen = false;
    } else {
      this.isDrawerOpen = true;
      this.dynamicMode = "side";
      this._bottomSheet.dismiss();
    }
  }

  onLogin() {
    const dialogRef = this._dialog.open(LoginComponent, {
      width: "500px",
      panelClass: "theme-modal",
      disableClose: true,
    });
  }
}
