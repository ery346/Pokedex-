import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pokeUsuario } from '../interface/auth.interface';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario!: string | boolean;
  private url: string = 'http://localhost:3000';
  validarr!: boolean;


  get nombre(){
    return this.usuario;
  }
  get validacion(){
    return this.validarr;
  }
  constructor(private http: HttpClient) { }

  postUsuario( datos: pokeUsuario ){
  
    return this.http.post<pokeUsuario>( `${ this.url }/pokeUsuario` , datos)
  }

  getUsuarioConId( id: number){
    return this.http.get<pokeUsuario>( `${ this.url }/pokeUsuario/${ id }`)
  }
  getUsuarios(){
    return this.http.get<pokeUsuario>( `${ this.url }/pokeUsuario`);
  }

  getUsuarioMenu( nombreUsuario: string | boolean){
    return this.usuario = nombreUsuario;
  }


  //proteccion de rutas
  validar( valor: boolean ){
    return this.validarr = valor;
  }
}
