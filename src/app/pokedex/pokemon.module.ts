import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PornombreComponent } from './pages/pornombre/pornombre.component';
import { PortipoComponent } from './pages/portipo/portipo.component';
import { MaterialModule } from '../material/material.module';
import { ListapokemonComponent } from './pages/listado/listapokemon.component';
import { HomeComponent } from './home/home.component';
import { AlturapesoPipe } from './pipes/alturapeso.pipe';
import { FormsModule } from '@angular/forms';
import { InfoExtraComponent } from './components/info-extra/info-extra.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { InfoListaComponent } from './components/info-lista/info-lista.component';




@NgModule({
  declarations: [
    PornombreComponent,
    PortipoComponent,
    ListapokemonComponent,
    HomeComponent,
    AlturapesoPipe,
    InfoExtraComponent,
    InfoListaComponent
  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
