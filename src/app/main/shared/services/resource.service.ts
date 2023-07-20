import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private readonly ApiUrl = environment.apiurl;

  constructor(private httpClient: HttpClient) { }

  get(url: string, params?: any) {
    return this.httpClient
      .get(`${this.ApiUrl}${url}`, { params: params })
      .pipe(catchError(this.handleError));
  }
  delete(url: string, payload:any) {
    return this.httpClient
      .delete(`${this.ApiUrl}${url}` + '/' + `${payload}`)
      .pipe(catchError(this.handleError));
  }
  post(url: string, payload?: any) {
    return this.httpClient
      .post(`${this.ApiUrl}${url}`, payload, { observe: 'body' })
      .pipe(catchError(this.handleError));
  }
  patch(url: string, payload?: any) {
    return this.httpClient
      .put(`${this.ApiUrl}${url}`, payload, { observe: 'body' })
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    console.error(error);
    const err = new Error(error.error.message)
    return throwError(() => err);
  }
}
