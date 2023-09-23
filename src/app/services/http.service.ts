import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  public getHttp<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.httpClient.get<T>(url, {params, headers});
  }

  public postHttp<T>(url: string, body: object): Observable<T> {
    return this.httpClient.post<T>(url, body);
  }

  public deleteHttp<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(url);
  }

  public putHttp<T>(url: string, body: object): Observable<T> {
    return this.httpClient.put<T>(url, body);
  }

  public patchHttp<T>(url: string, body: object): Observable<T> {
    return this.httpClient.patch<T>(url, body);
  }



  constructor(private httpClient: HttpClient) { }

  public get(url: string) {
    return this.httpClient.get(url).toPromise();
  }

  public post(url: string, data: object) {
    return this.httpClient.post(url, data).toPromise();
  }

  public put(url: string, data: object) {
    return this.httpClient.put(url, data).toPromise();
  }

  public delete(url: string) {
    return this.httpClient.delete(url).toPromise();
  }

}


