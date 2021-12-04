import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { RenovacionesComponent } from './pages/renovaciones/renovaciones.component';
import { AgregarClienteComponent } from './pages/agregar-cliente/agregar-cliente.component';
import { RuteroComponent } from './pages/rutero/rutero.component';
import { MaterialModule } from '../material/material.module';
import { PagosComponent } from './pages/pagos/pagos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RenovarComponent } from './pages/renovar/renovar.component';
import { ResumenComponent } from './pages/resumen/resumen.component';


@NgModule({
  declarations: [
    HomeComponent,
    RenovacionesComponent,
    AgregarClienteComponent,
    RuteroComponent,
    PagosComponent,
    RenovarComponent,
    ResumenComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MainRoutingModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
