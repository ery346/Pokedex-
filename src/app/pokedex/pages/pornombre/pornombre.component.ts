import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ability, Pokebuscar, Type } from '../../interfaces/pokeInter.interface';
import { PokemonserviceService } from '../../service/pokemonservice.service';

@Component({
  selector: 'app-pornombre',
  templateUrl: './pornombre.component.html',
  styles: [`
  img{
    height: 200px;
  }

  mat-card {
    border-radius: 50px;
  }

  mat-form-field{
    display: flex;
    justify-content: center;
  }
  `
  ]
})
export class PornombreComponent {

  img!: string;
  habilidades: Ability[] =[]
  movimientos: any = [];
  error: string = 'ocultar';
  valor!: string;
  termino: string = '';
  spinner: string = 'ocultar';
  datos!: Pokebuscar;
  tipo: Type[] = [];
  @ViewChild('pokemon')buscarPokemon! : ElementRef<HTMLInputElement>

  constructor(private pokemonS: PokemonserviceService) { }

  buscar(){
    this.valor = this.buscarPokemon.nativeElement.value;

    this.spinner = 'mostrar';
    this.pokemonS.getPokemon( this.valor ).subscribe( (datos: Pokebuscar) => {
      this.spinner = 'ocultar';
      this.error = 'ocultar';
      this.datos = datos;
      this.tipo = datos.types;
      this.movimientos = datos.moves
      this.img = datos.sprites.front_default;
      this.habilidades = datos.abilities;
    }, err => { this.error = 'mostrar'; this.spinner = 'ocultar'})

  }

  
}
