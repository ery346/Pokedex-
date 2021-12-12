import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  title = 'pokedex';
  habilitado: boolean = false;

  constructor( private router: Router, private authS: AuthService, private ar: ActivatedRoute){}

  get Nombre(){
    return this.authS.nombre;
  }
 
  home(){
    this.router.navigate(['/home'])
  }

  // miCuenta(){
  //   this.ar.params.subscribe(parametros => {
  //     // let id = Object.values( parametros );
  //     console.log(parametros)
  //     // this.router.navigate([`/cuenta/${ id[0] }`]);
  //   })
  // }

  logout(){

    this.authS.getUsuarioMenu( false );
    this.authS.validar( false );
    this.router.navigate(['/auth/login']);
  }
}
