import { Component, Input } from '@angular/core';
import {  Species, Stat } from '../../interfaces/pokeInter.interface';
import { PokemonserviceService } from '../../service/pokemonservice.service';


@Component({
  selector: 'app-info-extra',
  templateUrl: './info-extra.component.html',
  styles: [
  ]
})
export class InfoExtraComponent {

  @Input() estadisticas: Stat[] = [];

  @Input() experiencia: any
  nivel: Species[] =[];
  constructor(private servicio: PokemonserviceService) { }


}
