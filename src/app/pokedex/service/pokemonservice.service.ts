import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokebuscar, PokemonLista20, PokemonOpciones, PokeTipo } from '../interfaces/pokeInter.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonserviceService {
  private urlFijoListado: string= 'https://pokeapi.co/api/v2/pokemon?limit=26';
  private url: string = 'https://pokeapi.co/api/v2/';
  private configUrl!: any;

  iid!: number;
  get urlListado(){
    return this.urlFijoListado;
  }

  get identificador(){
    return this.iid ;
  }


  constructor(private http: HttpClient) { }

  getId( id : number){
    return this.iid = id;
  }

  //nombre pokemon
  getPokemon( termino: string | number ): Observable<Pokebuscar>{

    this.configUrl =  this.http.get<Pokebuscar>(`${ this.url }pokemon/${ termino }`)
    return this.configUrl;
  }

  //tipo pokemon
  getTipo( ): Observable<PokeTipo>{
    return this.http.get<PokeTipo>(`${ this.url }type/`)
  }

  getSelectUrl( url: string ){
     return this.http.get<PokemonOpciones>(`${ url }`);

  }

  getInfoPOkemon( url:string ): Observable<Pokebuscar>{
    return this.http.get<Pokebuscar>(`${ url }`);
  }

  //lista pokemon
  getlistado( url: string ): Observable<PokemonLista20>{
    return this.http.get<PokemonLista20>(`${ url }`);
  }

  getInfoLista( url: string ): Observable<Pokebuscar>{
    return  this.http.get<Pokebuscar>(`${ url }`);
  }

  getSiguienteLista( urlSiguiente: string): Observable<PokemonLista20>{
    return this.http.get<PokemonLista20>(`${ urlSiguiente }`);
  }
  

}
