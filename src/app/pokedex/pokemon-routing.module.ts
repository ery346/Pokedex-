import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListapokemonComponent } from './pages/listado/listapokemon.component';
import { PornombreComponent } from './pages/pornombre/pornombre.component';
import { PortipoComponent } from './pages/portipo/portipo.component';


const rutas: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listapokemon',
        component: ListapokemonComponent
      },
      {
        path: 'pornombre',
        component: PornombreComponent
      },
      {
        path: 'portipo',
        component: PortipoComponent
      },
      {
        path: '**',
        component: ListapokemonComponent
      }
    ]
  }
]

@NgModule({
 
  imports: [
    RouterModule.forChild( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class PokemonRoutingModule { }
