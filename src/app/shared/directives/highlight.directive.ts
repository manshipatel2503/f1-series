import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges{

  @Input('appHighlight') highlightColor: boolean = false;


  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.backgroundColor = '#70d96380';
  }

  ngOnChanges(){
    this.el.nativeElement.style.backgroundColor = this.highlightColor ? '#70d96380' : '';
  }
}
