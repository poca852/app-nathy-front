// modulos terceros
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modulos propios
import { AuthRoutingModule } from './auth-routing.module';
// components
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AuthRoutingModule,
    MaterialModule,
  ]
})
export class AuthModule { }
