import { Component, OnInit } from '@angular/core';
import { PokemonserviceService } from '../service/pokemonservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  habilitado: boolean = false;
  constructor(private pokemonS: PokemonserviceService) { }

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

  
}
