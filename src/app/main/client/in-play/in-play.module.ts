import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InPlayRoutingModule } from './in-play-routing.module';
import { InPlayComponent } from './in-play.component';


@NgModule({
  declarations: [
    InPlayComponent
  ],
  imports: [
    CommonModule,
    InPlayRoutingModule
  ]
})
export class InPlayModule { }
