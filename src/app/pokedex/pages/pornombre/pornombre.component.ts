import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ability, Move, Pokebuscar } from '../../interfaces/pokeInter.interface';
import { PokemonserviceService } from '../../service/pokemonservice.service';

@Component({
  selector: 'app-pornombre',
  templateUrl: './pornombre.component.html',
  styles: [`
  img{
    height: 200px;
  }
  mat-grid-list{
    background-color: #983399;
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
export class PornombreComponent implements OnInit {
  nombre!: string;
  peso!: number;
  altura!: number;
  img!: string;
  habilidades: Ability[] =[]
  movimientos: Move[] = []

  valor!: string;
  termino: string = '';
  
  @ViewChild('pokemon')buscarPokemon! : ElementRef<HTMLInputElement>

  constructor(private pokemonS: PokemonserviceService) { }

  ngOnInit(): void {

  }

  buscar(){
    this.valor = this.buscarPokemon.nativeElement.value;

    this.pokemonS.getPokemon( this.valor ).subscribe( (datos: Pokebuscar) => {
      console.log(datos)
     
      this.nombre = datos.name;
      this.peso = datos.weight;
      this.altura = datos.height
      this.movimientos = datos.moves
      this.img = datos.sprites.front_default;
      this.habilidades = datos.abilities;
    })

    console.log(this.termino)
  }

  refrescar(){
    window.location.reload()
  }
  
}
