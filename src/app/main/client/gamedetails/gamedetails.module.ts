import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamedetailsRoutingModule } from './gamedetails-routing.module';
import { ExchangeComponent } from './exchange/exchange.component';


@NgModule({
  declarations: [
    ExchangeComponent
  ],
  imports: [
    CommonModule,
    GamedetailsRoutingModule
  ]
})
export class GamedetailsModule { }
