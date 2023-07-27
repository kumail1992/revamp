import {
  Directive,
  Input,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
  OnChanges,
} from "@angular/core";
import { SkeletonLoaderComponent } from "./skeleton-loader.component";

@Directive({
  selector: "[skeleton]",
})
export class SkeletonDirective implements OnChanges {
  @Input("skeleton") isLoading = false;
  @Input("skeletonRepeat") size = 1;
  @Input("skeletonWidth") width!: string;
  @Input("skeletonHeight") height!: string;
  @Input("skeletonClassName") className!: string;

  constructor(
    private tpl: TemplateRef<any>,
    private viewContain: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes["isLoading"]) {
      this.viewContain.clear();

      if (changes["isLoading"].currentValue) {
        Array.from({ length: this.size }).forEach(() => {
          const ref = this.viewContain.createComponent(SkeletonLoaderComponent);

          Object.assign(ref.instance, {
            width: this.width,
            height: this.height,
            className: this.className,
          });
        });
      } else {
        this.viewContain.createEmbeddedView(this.tpl);
      }
    }
  }
}
