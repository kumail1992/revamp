import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostLoginGuard } from "../authentication/guards/postlogin.guard";

const routes: Routes = [
  {
    path: "",
    canActivateChild: [PostLoginGuard],
    children: [
      {
        path: "",
        loadChildren: () =>
          import("../dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
        data: { accessWithoutLogin: false },
      },
      {
        path: "in-play",
        loadChildren: () =>
          import("./in-play/in-play.module").then((m) => m.InPlayModule),
        data: { accessWithoutLogin: false },
      },
      {
        path: "gamedetails",
        loadChildren: () =>
          import("./gamedetails/gamedetails.module").then(
            (m) => m.GamedetailsModule
          ),
        data: {
          accessWithoutLogin: false,
          allowedID: [
            "SLOT_GAMES",
            "INSTANT_WIN",
            "SHOOTING_GAMES",
            "LIVE_CASINO",
          ],
        },
      },
      {
        path: "tableGames",
        loadChildren: () =>
          import("./table-games/table-games.module").then(
            (m) => m.TableGamesModule
          ),
      },
      {
        path: "newCasino",
        loadChildren: () =>
          import("./all-casino/all-casino.module").then(
            (m) => m.AllCasinoModule
          ),
      },
      {
        path: "**",
        redirectTo: "",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
