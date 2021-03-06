import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from '../pokedex/home/home.component';
import { ComenzarGuard } from '../pokedex/guard/comenzar.guard';
import { MiCuentaComponent } from '../auth/pages/mi-cuenta/mi-cuenta.component';


const rutas: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('src/app/auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'cuenta/: id',
    component: MiCuentaComponent,
    canLoad: [ ComenzarGuard ],
    canActivate: [ ComenzarGuard ]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pokemon',
    loadChildren: () => import('src/app/pokedex/pokemon.module').then( m => m.PokemonModule ), 
    canLoad: [ ComenzarGuard ],
    canActivate: [ ComenzarGuard ]
  },
  {
    path: '**',
    redirectTo: ''
  }
]


@NgModule({
  imports: [
   RouterModule.forRoot( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class ApprutasModule { }
