import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoaderComponent } from './skeleton-loader.component';
import { SkeletonDirective } from './skeleton.directive';

@NgModule({
  declarations: [SkeletonLoaderComponent, SkeletonDirective],
  imports: [CommonModule],
  exports: [SkeletonLoaderComponent, SkeletonDirective]
})
export class SkeletonLoaderModule {}
