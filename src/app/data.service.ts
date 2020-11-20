import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams   } from '@angular/common/http';
import { Language } from './language';
import {  throwError, Observable } from 'rxjs';
import {  catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000/api/languages";



  constructor(private httpClient: HttpClient) { }

  //function for http error.
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest(){
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
    //We will be able to see if an error occurs
    return this.httpClient.get<Language>(this.REST_API_SERVER, httpOptions).pipe(catchError(this.handleError));;
  }

  addLanguage(lang: any): Observable<Language> {
    return this.httpClient.post<Language>(this.REST_API_SERVER, lang, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

}
