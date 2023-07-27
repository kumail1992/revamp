import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { SharedModule } from "../shared/shared.module";
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule, MatTabsModule],
})
export class DashboardModule {}
