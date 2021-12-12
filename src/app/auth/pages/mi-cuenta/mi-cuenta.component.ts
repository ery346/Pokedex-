import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pokeUsuario } from '../../interface/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styles: [
  ]
})
export class MiCuentaComponent implements OnInit {
  //i18nSelect
  genero: string = '';

  bienvenida = {
    'Masculino': 'Bienvenido',
    'Femenino': 'Bienvenida'
  }
  listo = {
    'Masculino': 'Listo',
    'Femenino': 'Lista'
  }
  nombre!: string;
  apellido!: string;
  constructor(private ar: ActivatedRoute,
              private servicio: AuthService) { }

  ngOnInit(): void {
    this.ar.params.subscribe(id => {
      let a = Object.values( id );
      this.servicio.getUsuarioConId( a[0] ).subscribe((datos: pokeUsuario) => {
        this.nombre = datos.nombre;
        this.apellido = datos.apellido;
        this.genero = datos.genero;
      })
    });
  
  }
  
 
  

}
