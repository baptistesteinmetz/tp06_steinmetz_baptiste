import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable(
  {
  providedIn: 'root'
  }
)

export class ApiService {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
      })
  };

  public tokenParse;

  public setJWT(){
    this.httpOptions.headers.append('Authorization', `Bearer ${this.tokenParse}`);
  }

}
