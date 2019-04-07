import { PedidosComponent } from './pedidos/pedidos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SucursalEditComponent } from './sucursal-edit/sucursal-edit.component';
import { SucursalListComponent } from './sucursal-list/sucursal-list.component';
import { SucursalCreateComponent } from './sucursal-create/sucursal-create.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-sucursal' },
  { path: 'create-sucursal', component: SucursalCreateComponent },
  { path: 'sucursal-list', component: SucursalListComponent },
  { path: 'sucursal-edit/:id', component: SucursalEditComponent },
  { path : 'pedidos', component: PedidosComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
