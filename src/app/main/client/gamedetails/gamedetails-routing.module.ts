import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeComponent } from './exchange/exchange.component';

const routes: Routes = [
  {
    path:':id',
    component: ExchangeComponent
  },
  {
    path:':id/:mode',
    component: ExchangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamedetailsRoutingModule { }
