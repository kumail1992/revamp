import { HttpClient } from "@angular/common/http";
import { StorageService } from "./../../shared/services/storage.service";
import { Component, OnInit } from "@angular/core";
import { delay, distinct, filter, finalize, map, tap, toArray } from "rxjs";

@Component({
  selector: "app-all-casino",
  templateUrl: "./all-casino.component.html",
  styleUrls: ["./all-casino.component.scss"],
})
export class AllCasinoComponent implements OnInit {
  url = "../../../../assets/indexGames.json";
  gameList: any = [];
  providersList: any = [];
  filtersList: any = [];
  listToShow = [];
  selectedFilter = "All Games";
  isLoading: boolean = false;
  pageLoading: boolean = false;
  constructor(
    private storageService: StorageService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.pageLoading = true;
    this.http
      .get(this.url)
      .pipe(
        map((data: any) => {
          return data.map((item: any) => {
            if (
              item.ProviderCode != "PokerCasino" &&
              item.ProviderCode != "Evolution"
            ) {
              return {
                ...item,
                link: `/client/gamedetails/${item.GameID}/casino`,
              };
            }
            if (item.ProviderCode == "PokerCasino") {
              return {
                ...item,
                link: `/client/gamedetails/${item.GameID}/Poker'`,
              };
            }
            if (item?.ProviderCode == "Evolution") {
              return {
                ...item,
                link: `/client/gamedetails/${item?.GameCode}/table-${item?.GameID}`,
              };
            }
          });
        }),
        tap((res) => {
          this.providersList = [
            "All",
            ...new Set(res.map((item: any) => item.ProviderCode)),
          ];
          this.filtersList = [
            "All Games",
            ...new Set(res.map((item: any) => item.filter)),
          ];
        }),
        delay(1000),
        finalize(() => (this.pageLoading = false))
      )
      .subscribe((res) => {
        this.gameList = res;
        this.listToShow = this.gameList;
      });
  }

  showFilteredList(filterBy: string, text: string) {
    if (!this.isLoading) {
      this.isLoading = true;
      this.selectedFilter = text;
      setTimeout(() => {
        this.isLoading = false;
        if (text === "All" || text === "All Games") {
          this.listToShow = this.gameList;
        } else {
          this.listToShow = this.gameList.filter(
            (item: any) => item[filterBy] === text
          );
        }
      }, 1000);
    }
  }

  onErrorImages(e: any) {
    e.target.srcset = "";
    e.target.src = "assets/preloader-dark.svg";
  }
}
