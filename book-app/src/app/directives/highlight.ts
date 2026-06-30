import { Directive, ElementRef, Input, input, OnInit } from '@angular/core';

@Directive({
  selector: '[bookHighlight]',
  exportAs: 'bookHighlight',
})
export class Highlight implements OnInit {
  @Input() rating = 0;
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.applyStyle();
  }

  externalUse() {
    console.log('Using bookHighlight directive');
  }

  applyStyle() {
    if (this.rating >= 4) {
      this.elementRef.nativeElement.style.backgroundColor = 'green';
    } else {
      this.elementRef.nativeElement.style.backgroundColor = 'gray';
    }
  }
}
