import { Component, OnInit } from '@angular/core';
import { Result, Pokebuscar, Ability } from '../../interfaces/pokeInter.interface';
import { PokemonserviceService } from '../../service/pokemonservice.service';

@Component({
  selector: 'app-listapokemon',
  templateUrl: './listapokemon.component.html',
  styles: [
  ]
})
export class ListapokemonComponent implements OnInit {
  listado: Result[]= [];
  siguienteListado!: string;

  componenteNombre!: string;
  img!: string;
  info!: Pokebuscar;
  habilidades: Ability[] = [];
  peso!: number;
  altura!: number;
  idPokemon!: number;
  barraDeProgreso: string = 'ocultar';
  arregloUrl: string[] = [`${ this.url }`];

  urlAnterior!: any;
  desabilitarA: boolean = true;
  desabilitarS: boolean = false;
  paginas: number = 1;

  get url(){
    return this.pokemonS.urlListado;
  }

  constructor(private pokemonS: PokemonserviceService) { }

  ngOnInit(): void {

    this.pokemonS.getlistado( this.url ).subscribe(datos => {
      this.listado = datos.results;
      this.siguienteListado = datos.next;

    });
  }

  infoLista(url: string){
    this.barraDeProgreso = 'mostrar';
    this.pokemonS.getInfoLista(`${ url }`).subscribe((info: Pokebuscar) => {
      this.componenteNombre = info.name;
      this.info = info;
      this.img = info.sprites.front_default;
      this.habilidades = info.abilities;
      this.peso = info.weight;
      this.altura = info.height;
      this.idPokemon = info.id;
      this.barraDeProgreso = 'ocultar';
    });

  }

  siguienteLista(urlSiguiente: string){
 
    this.pokemonS.getSiguienteLista(`${ urlSiguiente }`).subscribe( lista => {
      this.barraDeProgreso = 'mostrar';
      this.pokemonS.getlistado( urlSiguiente ).subscribe(url => {
        this.listado = url.results;
        this.siguienteListado = url.next;

        this.arregloUrl = [...this.arregloUrl, urlSiguiente]
        this.barraDeProgreso = 'ocultar';
      })
    
    });

    if (this.arregloUrl.length >= 1) {
      this.desabilitarA = false;
    }
   
    this.paginas = this.paginas + 1;
    if (this.paginas === 43) {
      this.paginas = 43;
      this.desabilitarS = true;
    }
  }

  anteriorLista(){
    
    this.arregloUrl.pop();
    this.urlAnterior = this.arregloUrl[this.arregloUrl.length-1]
    this.barraDeProgreso = 'mostrar';
    this.pokemonS.getlistado( this.urlAnterior ).subscribe(url => {
      this.listado = url.results;
      this.siguienteListado = url.next;
      this.barraDeProgreso = 'ocultar';
    })
    
    if (this.arregloUrl.length === 1) {
      this.desabilitarA = true;
    }
    if (this.paginas === 43) {
      this.desabilitarS = false;
    }
    this.paginas = this.paginas - 1;
  }
  
}
