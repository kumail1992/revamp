import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AllCasinoRoutingModule } from "./all-casino-routing.module";
import { AllCasinoComponent } from "./all-casino.component";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { SkeletonLoaderModule } from "../../shared/directives/skeleton-loader/skeleton-loader.module";

@NgModule({
  declarations: [AllCasinoComponent],
  imports: [
    CommonModule,
    AllCasinoRoutingModule,
    ScrollingModule,
    SkeletonLoaderModule,
  ],
})
export class AllCasinoModule {}
