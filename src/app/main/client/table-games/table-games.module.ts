import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableGamesRoutingModule } from './table-games-routing.module';
import { TableGamesComponent } from './table-games.component';


@NgModule({
  declarations: [
    TableGamesComponent
  ],
  imports: [
    CommonModule,
    TableGamesRoutingModule
  ]
})
export class TableGamesModule { }
