import { Component, OnInit } from '@angular/core';
import { PokemonLista20, Result, Pokebuscar, Ability } from '../../interfaces/pokeInter.interface';
import { PokemonserviceService } from '../../service/pokemonservice.service';

@Component({
  selector: 'app-listapokemon',
  templateUrl: './listapokemon.component.html',
  styles: [
  ]
})
export class ListapokemonComponent implements OnInit {

  private url: string= 'https://pokeapi.co/api/v2/pokemon?limit=26';

  listado: Result[]= [];
  siguienteListado!: string;

  componenteNombre!: string;
  img!: string;
  info!: Pokebuscar;
  habilidades: Ability[] = [];
  peso!: number;
  altura!: number;
  idPokemon!: number;

  arregloUrl: string[] = [`${this.url}`];

  urlAnterior!: any;
  dis: boolean = true;
  paginas: number = 1;
  constructor(private pokemonS: PokemonserviceService) { }

  ngOnInit(): void {

    this.pokemonS.getlistado( this.url ).subscribe(datos => {
      this.listado = datos.results;
      this.siguienteListado = datos.next;

    });
  }

  infoLista(url: string){

    this.pokemonS.getInfoLista(`${ url }`).subscribe((info: Pokebuscar) => {
      this.componenteNombre = info.name;
      this.info = info;
      this.img = info.sprites.front_default;
      this.habilidades = info.abilities;
      this.peso = info.weight;
      this.altura = info.height;
      this.idPokemon = info.id;
    });

  }

  siguienteLista(urlSiguiente: string){
 
    this.pokemonS.getSiguienteLista(`${ urlSiguiente }`).subscribe( lista => {

      this.pokemonS.getlistado( urlSiguiente ).subscribe(url => {
        this.listado = url.results;
        this.siguienteListado = url.next;

        this.arregloUrl = [...this.arregloUrl, urlSiguiente]
      })
    
    });

    if (this.arregloUrl.length >= 1) {
      this.dis = false;
    }
   
    this.paginas = this.paginas + 1;
  }

  anteriorLista(){
    
    this.arregloUrl.pop();
    this.urlAnterior = this.arregloUrl[this.arregloUrl.length-1]

    this.pokemonS.getlistado( this.urlAnterior ).subscribe(url => {
      this.listado = url.results;
      this.siguienteListado = url.next;
    })
    
    if (this.arregloUrl.length === 1) {
      this.dis = true;
    }
    this.paginas = this.paginas - 1;
  }

  
}
