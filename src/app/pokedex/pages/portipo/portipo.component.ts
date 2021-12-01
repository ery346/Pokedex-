import { Component, OnInit} from '@angular/core';
import { Ability, Move, Pokebuscar, Pokemon, PokemonOpciones, PokeTipo, Result, Stat } from '../../interfaces/pokeInter.interface';
import { PokemonserviceService } from '../../service/pokemonservice.service';


@Component({
  selector: 'app-portipo',
  templateUrl: './portipo.component.html',
  styles: [`
    mat-form-field{
      display: flex;
      justify-content: center;
    }
    mat-tab {
      display: flex;
      justify-content: center;
   
    }
    .example-small-box{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 16px;
      padding: 16px;
      border-radius: 8px;
}
  `
  ]
})
export class PortipoComponent implements OnInit {

  valor!: string;
  termino: Result[] = [];

  private urlPokemon!: string;

  tipoP: Pokemon[] = [];
  nombre!: string;
  peso!: number;
  altura!: number;
  movimientos!: Move[];
  img!: string;
  habilidades!: Ability[];
  visibilidad: string = 'ocultar';
  
  estadistica: Stat[] = [];
  experienciaB!: number;
  tiposVisible: boolean = false;

 
  constructor(private pokemonS: PokemonserviceService) { }

  ngOnInit(): void {

    this.pokemonS.getTipo().subscribe((datos: PokeTipo) => {
      this.termino = datos.results;
    });

  }

  buscarUrlTipo( url: string){
    this.tiposVisible = true;

    this.pokemonS.getSelectUrl( url ).subscribe( (dato: PokemonOpciones) => {
      this.tipoP = dato.pokemon
    });
  
  }

  infoPokemon(  url: string ){
    this.urlPokemon = url;

    this.pokemonS.getInfoPOkemon(`${ this.urlPokemon }`).subscribe((datos: Pokebuscar) => {
      
      this.visibilidad = 'mostrar';
      this.nombre = datos.name;
      this.peso = datos.weight;
      this.altura = datos.height
      this.movimientos = datos.moves
      this.img = datos.sprites.front_default || datos.sprites.front_shiny;
      this.habilidades = datos.abilities;
      this.estadistica = datos.stats;
      this.experienciaB = datos.base_experience

    });

  }

}
