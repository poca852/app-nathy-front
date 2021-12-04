import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarClienteComponent } from './pages/agregar-cliente/agregar-cliente.component';
import { HomeComponent } from './pages/home/home.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { RenovacionesComponent } from './pages/renovaciones/renovaciones.component';
import { RenovarComponent } from './pages/renovar/renovar.component';
import { RuteroComponent } from './pages/rutero/rutero.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'rutero',
        component: RuteroComponent
      },
      {
        path: 'agregar-cliente',
        component: AgregarClienteComponent
      },
      {
        path: 'renovaciones',
        component: RenovacionesComponent
      },
      {
        path: 'renovar/:id',
        component: RenovarComponent
      },
      {
        path: 'pagos/:id',
        component: PagosComponent
      },
      {
        path: '**',
        redirectTo: 'rutero'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
