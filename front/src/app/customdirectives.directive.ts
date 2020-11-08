import { element } from 'protractor';
import { Directive, Input, TemplateRef, ViewContainerRef, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ccErrorInput]'
})

export class ErrorInputDirective {

  // ErrClass: boolean = false;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private renderer: Renderer2,
              private el: ElementRef) {}

  @Input() set ccErrorInput(condition: boolean){
    if (!condition){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
      this.viewContainer.clear();
    }
  }

}
