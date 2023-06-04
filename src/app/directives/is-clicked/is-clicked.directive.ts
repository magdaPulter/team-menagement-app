import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({ selector: '[isCLicked]' })
export class IsCLickedDirective implements OnChanges{
  @Input() isCLicked!: boolean

  constructor(private _renderer2: Renderer2, private _elementRef: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.isCLicked) {
        this._renderer2.addClass(this._elementRef.nativeElement, 'show')
    } else {
        this._renderer2.removeClass(this._elementRef.nativeElement, 'show')
    }
  }


}
