import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/auth/services/validator.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { ValidacionCorreoService } from '../../services/validacion-correo.service';
import { Genero } from '../../interface/auth.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [`  a {
    color: white;
  }`
  ]
})
export class RegistroComponent {

  genero: Genero[] = [
    {texto: 'Masculino'},
    {texto: 'Femenino'}
  ]
   
  formulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    genero: ['', Validators.required],
    usuario: ['', [Validators.required, Validators.minLength(8)]],
    correo: ['', [Validators.required, Validators.pattern( this.validarS.patronEmail )], [ this.correoV]],
    contraseña: ['', [Validators.required, Validators.minLength(10)]],
    confirmacionC: ['', Validators.required]
  },{ 
    validator: [this.validarS.camposIguales( 'contraseña' , 'confirmacionC' )]
  }
  );
  constructor( private fb: FormBuilder, 
               private validarS: ValidatorService, 
               private usuarioS: AuthService,
               private rutas: Router,
               private correoV: ValidacionCorreoService
               ) { }

  validacion( campo: string){
    return this.formulario.get( campo )?.invalid && 
           this.formulario.get( campo )?.touched
  }

  submit(){

    if (!this.formulario.valid) {
      this.formulario.markAllAsTouched();
    } else {
      const datos = this.formulario.value;
      this.usuarioS.postUsuario( datos ).subscribe(d => {
       
      });
      this.formulario.reset();
      this.rutas.navigate(['/auth/login']);
    }
  }
}
