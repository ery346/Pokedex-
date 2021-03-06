import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MiCuentaComponent } from './pages/mi-cuenta/mi-cuenta.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent,
    MiCuentaComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]

})
export class AuthModule { }
