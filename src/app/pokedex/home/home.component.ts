import { Component, OnInit } from '@angular/core';
import { PokemonserviceService } from '../service/pokemonservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  habilitado: boolean = false;
  constructor(private pokemonS: PokemonserviceService) { }

  ngOnInit(): void {
  
  }


  comenzar(){

    this.habilitado = true;
   
    const valor = true;
    this.pokemonS.validar( valor );

  }

  
}
