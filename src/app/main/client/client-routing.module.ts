import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoggedinGuard } from "../authentication/guards/loggedin.guard";

const routes: Routes = [
  {
    path: "",
    canActivateChild: [LoggedinGuard],
    children: [
      {
        path: "",
        loadChildren: () =>
          import("../dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
        data: {accessWithoutLogin: false},
      },
      {
        path: "in-play",
        loadChildren: () =>
          import("./in-play/in-play.module").then((m) => m.InPlayModule),
        data: {accessWithoutLogin: false},
      },
      {
        path: "gamedetails",
        loadChildren: () =>
          import("./gamedetails/gamedetails.module").then((m) => m.GamedetailsModule),
        data: {accessWithoutLogin: false, allowedID:['SLOT_GAMES','INSTANT_WIN','SHOOTING_GAMES','LIVE_CASINO']},
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
