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
  peso!: number;
  altura!: number;
  experienciaB!: number;
  tipo: Type[] = [];
  nombre!: string;
  id!: number;
  estadisticas: Stat[] = [];

  get identif(){
    return this.pokemonS.identificador;
  }
  constructor(private pokemonS: PokemonserviceService) { }

  ngOnInit(): void {
    this.pokemonS.getPokemon( this.identif ).subscribe( (datos: Pokebuscar ) => {
      this.nombre = datos.name;
      this.id = datos.id;
      this.peso = datos.weight;
      this.altura = datos.height;
      this.experienciaB = datos.base_experience;
      this.estadisticas = datos.stats;
      this.tipo = datos.types;
      this.movimientos = datos.moves
      this.img = datos.sprites.front_default;
      this.habilidades = datos.abilities;
    })
  }

}
