import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyStyle]'
})
//Attribute directive
export class MyStyleDirective {

  @Input() fontSize ! :string;

  constructor(private eLRef:ElementRef) { 
    eLRef.nativeElement.style.color="red";
    eLRef.nativeElement.style.backgroundColor="yellow";
    eLRef.nativeElement.style.fontSize="60px";
  }

  ngAfterViewInit():void{
    this.eLRef.nativeElement.style.fontSize=this.fontSize;
  }
  @HostListener("mouseenter")
  onMouseEnter(){
    this.eLRef.nativeElement.style.backgroundColor="blue";
  }
  @HostListener("mouseleave")
  onMouseLeave(){
    this.eLRef.nativeElement.style.backgroundColor="green";
  }
}
