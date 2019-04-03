import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";


@Component({
  selector: 'app-sucursal-list',
  templateUrl: './sucursal-list.component.html',
  styleUrls: ['./sucursal-list.component.css']
})
export class SucursalListComponent implements OnInit {

  Sucursal: any = [];
  constructor( public restApi: RestApiService) { }

  ngOnInit() {
    this.loadSucursal()
  }

  // Get sucursal list
  loadSucursal() {
    return this.restApi.getSucursales().subscribe((data: {}) => {
      this.Sucursal = data;
    })
  }

   // Delete sucursal
   deleteSucursal(id) {
    if (window.confirm('Are you sure, you want to delete? - ' + id)){
      this.restApi.deleteSucursal(id).subscribe(data => {
        this.loadSucursal()
      })
    }
  }  

}
