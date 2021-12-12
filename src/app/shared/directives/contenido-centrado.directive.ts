import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[ContenidoCentrado]'
})
export class ContenidoCentradoDirective implements OnInit {

  html!: ElementRef<HTMLElement>;
  
  constructor(private el: ElementRef<HTMLElement>) { 
    this.html = el;
  }

  ngOnInit(): void {
    this.setContenido();
  }

  setContenido(){
    this.html.nativeElement.style.display = 'flex';
    this.html.nativeElement.style.justifyContent = 'center';
  }
}
