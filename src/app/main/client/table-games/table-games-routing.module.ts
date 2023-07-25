import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableGamesComponent } from './table-games.component';

const routes: Routes = [
  {
    path: '',
    component:TableGamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableGamesRoutingModule { }
