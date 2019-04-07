import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Routing module for router service
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { SucursalCreateComponent } from './sucursal-create/sucursal-create.component';
import { SucursalEditComponent } from './sucursal-edit/sucursal-edit.component';
import { SucursalListComponent } from './sucursal-list/sucursal-list.component';
// Forms module
import { FormsModule } from '@angular/forms';
// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';
import { PedidosComponent } from './pedidos/pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    SucursalCreateComponent,
    SucursalEditComponent,
    SucursalListComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
