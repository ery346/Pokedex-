import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokebuscar, Pokemon, PokemonLista20, PokemonOpciones, PokeTipo } from '../interfaces/pokeInter.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonserviceService {

  private url: string = 'https://pokeapi.co/api/v2/';
 
  private configUrl!: any;

  validarr!: boolean;

  get validacion(){
    return this.validarr;
  }


  constructor(private http: HttpClient) { }

//nombre pokemon
  getPokemon( termino: string): Observable<Pokebuscar>{

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
  

  //proteccion de rutas
  validar( valor: boolean ){
    return this.validarr = valor;
  }

}
