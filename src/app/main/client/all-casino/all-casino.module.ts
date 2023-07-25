import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllCasinoRoutingModule } from './all-casino-routing.module';
import { AllCasinoComponent } from './all-casino.component';


@NgModule({
  declarations: [
    AllCasinoComponent
  ],
  imports: [
    CommonModule,
    AllCasinoRoutingModule
  ]
})
export class AllCasinoModule { }
