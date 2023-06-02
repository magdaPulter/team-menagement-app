import { Directive, ElementRef, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Directive({ selector: '[appTabset]' })
export class TabsetDirective {
  @Input() appTabset!: boolean

  constructor(private _renderer2: Renderer2, private _elementRef: ElementRef) {
  }

  @HostListener('click')
  onclick() {

  }

}
