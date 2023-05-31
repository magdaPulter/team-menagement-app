import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({ selector: '[progressbarPercentage]' })
export class ProgressbarPercentageDirective implements OnInit {
  @Input() progressbarPercentage!: string
  @Input() isColorChanged!: boolean

  constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {
  }

  readonly colorsClassMap: Record<string, number[]> = {
      'bg-danger': [0, 34],
      'bg-warning': [34, 67],
      'bg-success':  [67, 100]
  }

  ngOnInit() {
    const colorClass: {value: number, class:string} = Object.entries(this.colorsClassMap)
    .filter(([_,v]) => +this.progressbarPercentage > v[0] && +this.progressbarPercentage <= v[1])
    .map(([k,v]) => ({
      value: Math.trunc(+this.progressbarPercentage/v[0]),
      class: k
    }))[0]
    

    this._renderer2.setStyle(
      this._elementRef.nativeElement, 
      'width', 
      `${this.progressbarPercentage}%`
    )

    if(this.isColorChanged) {
      this._renderer2.addClass(
        this._elementRef.nativeElement, 
        `${colorClass.class}`  
      )
    }
  }
}
