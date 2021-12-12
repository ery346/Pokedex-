import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { pokeUsuario } from '../../interface/auth.interface';


import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  a {
    color: white;
  }
  `
  ]
})
export class LoginComponent {
  arregloDatos: pokeUsuario[] = [];
  error: boolean = false;
  formulario: FormGroup = this.fb.group({
    usuario: ['tequitequi', Validators.required],
    contraseña: ['novecientos', Validators.required]
  })
  constructor(private pokemonS: AuthService, 
              private usuarioS: AuthService,
               private fb: FormBuilder,
               private ruta: Router) { }

  submit(){
 
    this.usuarioS.getUsuarios().subscribe( (d :any)=> {
      
      d.forEach((element: any) => {
      
        if(this.formulario.controls.usuario.value ===  element.usuario && this.formulario.controls.contraseña.value === element.contraseña){

          const a = d.find((datos: any) => {
            return datos.usuario === this.formulario.controls.usuario.value;
          });
          this.usuarioS.getUsuarioMenu( a.nombre + '-' + a.apellido )

          const valor = true;
                  this.pokemonS.validar( valor );
                  this.ruta.navigate([`/cuenta/${ a.id }`]);
        }else{
          this.formulario.markAllAsTouched();
          this.error = true;
        }
        
      });
      
    })
   
  }
  
}
