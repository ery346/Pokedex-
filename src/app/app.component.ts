import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokedex';
  habilitado: boolean = false;

  constructor( private router: Router, private authS: AuthService, private ar: ActivatedRoute){}

  get Nombre(){
    return this.authS.nombre;
  }
  ngOnInit(): void {
    //conexion a internet
    const enLinea = navigator.onLine;

    window.addEventListener('online', updateNetState);
    window.addEventListener('offline', updateNetState);

    function updateNetState(): void{
      if(navigator.onLine ) {
        alert('Conexión establecida');
      } else {
        alert('Parece que has perdido tu conexión a internet...');
      }
    }
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
