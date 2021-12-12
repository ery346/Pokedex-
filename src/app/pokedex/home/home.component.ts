import { Component } from '@angular/core';
import { PokemonserviceService } from '../service/pokemonservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  habilitado: boolean = false;
  constructor(private pokemonS: PokemonserviceService) { }
}
