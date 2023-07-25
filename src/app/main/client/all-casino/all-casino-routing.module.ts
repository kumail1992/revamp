import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCasinoComponent } from './all-casino.component';

const routes: Routes = [
  {
    path: '',
    component: AllCasinoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllCasinoRoutingModule { }
