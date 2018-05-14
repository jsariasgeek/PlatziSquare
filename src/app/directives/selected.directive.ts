import {Directive, ElementRef, OnInit, Renderer2, Input} from '@angular/core';

@Directive({
  selector:'[set_default]'
})

export class SelectedDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2){

  }

  @Input('set_default') value:string = '':

  ngOnInit(){

    if(this.value === 'free'){
      this.renderer.setAttribute(this.elRef.nativeElement, 'selected', 'selected');
    }
  }
}

