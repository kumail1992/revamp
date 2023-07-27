import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GamedetailsRoutingModule } from "./gamedetails-routing.module";
import { ExchangeComponent } from "./exchange/exchange.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [ExchangeComponent],
  imports: [CommonModule, GamedetailsRoutingModule, SharedModule],
})
export class GamedetailsModule {}
