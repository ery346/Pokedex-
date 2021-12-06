import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonserviceService } from './pokedex/service/pokemonservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokedex';
  habilitado: boolean = false;

  constructor(private pokemonS: PokemonserviceService, private router: Router){}

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

  comenzar(){
    //guard de paginas
    this.habilitado = true;
    const valor = true;
    this.pokemonS.validar( valor );
  }

  refrescar(){
    this.router.navigate(['/home'])
  }
}
