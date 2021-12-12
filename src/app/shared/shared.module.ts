import { NgModule } from '@angular/core';

import { ContenidoCentradoDirective } from './directives/contenido-centrado.directive';



@NgModule({
  declarations: [
    ContenidoCentradoDirective
  ],
  exports: [
    ContenidoCentradoDirective
  ]
})
export class SharedModule { }
