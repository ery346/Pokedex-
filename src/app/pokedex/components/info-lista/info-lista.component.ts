import { Component, Input, OnInit } from '@angular/core';
import { Ability } from '../../interfaces/pokeInter.interface';


@Component({
  selector: 'app-info-lista',
  templateUrl: './info-lista.component.html',
  styles: [
  ]
})
export class InfoListaComponent implements OnInit {

  
  @Input() nombre!: string;

  @Input() imagen!: string;

  @Input()habilidad: Ability[] = [];

  @Input()Peso!: number;

  @Input()Altura!: number;

  @Input()ID!: number;
  constructor() { }

  ngOnInit(): void {
    
  }


}