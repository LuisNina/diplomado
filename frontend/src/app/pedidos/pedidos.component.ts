import { ListRestApiService } from './../shared/list-rest-api.service';
import { listaPedidos } from './../shared/listaPedidos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  listas$: listaPedidos[];   //$observable

  constructor(private ListRestApiService: ListRestApiService ) { }

  ngOnInit() {
    return this.ListRestApiService.getPedidos().subscribe(data => this.listas$ = data)
  }

}
