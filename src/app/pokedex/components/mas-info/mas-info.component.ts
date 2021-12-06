import { Component, OnInit } from '@angular/core';
import { Ability, Pokebuscar, Stat, Type } from '../../interfaces/pokeInter.interface';
import { PokemonserviceService } from '../../service/pokemonservice.service';

@Component({
  selector: 'app-mas-info',
  templateUrl: './mas-info.component.html',
  styles: [
  ]
})
export class MasInfoComponent implements OnInit {

  img!: string;
  habilidades: Ability[] =[]
  movimientos: any = [];
  valor!: string;
  termino: string = '';
  dato!: Pokebuscar;
  tipo: Type[] = [];

  estadisticas: Stat[] = [];

  get identif(){
    return this.pokemonS.identificador;
  }
  constructor(private pokemonS: PokemonserviceService) { }

  ngOnInit(): void {
    this.pokemonS.getPokemon( this.identif ).subscribe( (datos: Pokebuscar ) => {
      this.dato = datos;
   
      this.estadisticas = datos.stats;
      this.tipo = datos.types;
      this.movimientos = datos.moves
      this.img = datos.sprites.front_default;
      this.habilidades = datos.abilities;
    })
  }

}
