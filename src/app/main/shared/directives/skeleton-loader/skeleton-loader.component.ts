/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Component, ElementRef, OnInit } from "@angular/core";

@Component({
  selector: "app-skeleton-rect",
  host: {
    class: "pulse",
  },
  template: ``,
  styles: [
    // eslint-disable-next-line spellcheck/spell-checker
    `
      :host {
        display: block;
        width: var(--skeleton-rect-width);
        height: var(--skeleton-rect-height);
        background: rgb(26 26 26) no-repeat;
        background-image: linear-gradient(
          90deg,
          black 0px,
          rgb(0 0 0) 40px,
          #1a1a1a 80px
        );
        background-size: 300%;
        background-position: 100% 0;
        border-radius: 4px;
        animation: shimmer 2s infinite;
      }

      @keyframes shimmer {
        to {
          background-position: -100% 0;
        }
      }
    `,
  ],
})
export class SkeletonLoaderComponent implements OnInit {
  width!: string;
  height!: string;
  className!: string;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const host = this.host.nativeElement;

    if (this.className) {
      host.classList.add(this.className);
    }

    host.style.setProperty("--skeleton-rect-width", this.width ?? "100%");
    host.style.setProperty("--skeleton-rect-height", this.height ?? "20px");
  }
}
