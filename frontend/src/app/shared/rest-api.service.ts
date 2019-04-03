import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sucursal } from '../shared/sucursal';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // Define API
  apiURL = 'https://pizzasucursal.azurewebsites.net/api/pizza_branch';

  constructor( private http: HttpClient ) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch Sucursal list
  getSucursales(): Observable<Sucursal> {
    return this.http.get<Sucursal>(this.apiURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch Sucursal
  getSucursal(id): Observable<Sucursal> {
    return this.http.get<Sucursal>(this.apiURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create Sucursal
  createSucursal(sucursal): Observable<Sucursal> {
    return this.http.post<Sucursal>(this.apiURL, JSON.stringify(sucursal), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update Sucursal
  updateSucursal(id, sucursal): Observable<Sucursal> {
    return this.http.put<Sucursal>(this.apiURL, JSON.stringify(sucursal), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete Sucursal
  deleteSucursal(id){
    return this.http.delete<Sucursal>(this.apiURL + '/' + id , this.httpOptions)
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
