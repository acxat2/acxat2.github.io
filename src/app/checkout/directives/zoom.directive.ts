import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appZoom]',
})
export class ZoomDirective {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('zoomSize') size = 18;


  @HostListener('mouseenter') onMouseIn() {
    this.setFontSize(this.size)
  }

  @HostListener('mouseleave') onMouseOut() {
    this.setFontSize(18)
  }

  constructor(private el: ElementRef) {
    // console.log(this.el.nativeElement)
  }

  setFontSize(value: number | string): void {
    this.el.nativeElement.style.fontSize = `${value}px`
  }
}
