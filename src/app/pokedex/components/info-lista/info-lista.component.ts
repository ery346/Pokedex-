import { Component, Input } from '@angular/core';
import { Ability } from '../../interfaces/pokeInter.interface';
import { PokemonserviceService } from '../../service/pokemonservice.service';


@Component({
  selector: 'app-info-lista',
  templateUrl: './info-lista.component.html',
  styles: [
  ]
})
export class InfoListaComponent {

  
  @Input() nombre!: string;

  @Input() imagen!: string;

  @Input()habilidad: Ability[] = [];

  @Input()Peso!: number;

  @Input()Altura!: number;

  @Input()ID!: number;

  constructor( private pokemonS: PokemonserviceService) { }

  masInfo( id: number){
    this.pokemonS.getId( id );
  }

}
