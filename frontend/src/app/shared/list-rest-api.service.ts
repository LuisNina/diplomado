import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listaPedidos } from '../shared/listaPedidos';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListRestApiService {

  apiUrl = 'https://g1containerorderservice.azurewebsites.net/api/orders';

  constructor(private _http: HttpClient) { }
  
  getPedidos(){
    return this._http.get<listaPedidos[]>(this.apiUrl);
  }

  //from here
  getPedidosAll(): Observable<listaPedidos[]> {
    return this._http.get<listaPedidos[]>(this.apiUrl)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
