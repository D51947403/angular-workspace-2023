import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myIf]'
})
//Structural directive
export class MyifDirective {

  constructor(private templateRef:TemplateRef<any> ,
    private containerRef:ViewContainerRef ) { }

   @Input() set myIf(condition:boolean){
     if(condition){
      this.containerRef.createEmbeddedView(this.templateRef)
     }else{
      this.containerRef.clear();
     }
    }

}
