import { environment } from './../environments/environment';
import { ApiService } from './api.service';
import { EventEmitter } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../shared/models/User';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import { catchError, tap, map, filter} from 'rxjs/operators';

@Injectable(
  {
  providedIn: 'root'
  }
)
export class UserService extends ApiService {
  constructor(private hClient: HttpClient) {
    super(hClient);
   }

  private users: User[];

  public addUser(u: User): Observable<User> {
    const  body = new URLSearchParams();
    body.set('firstname', u.firstname);
    body.set('lastname', u.lastname);
    body.set('adress', u.adress);
    body.set('zipcode', u.zipcode);
    body.set('city', u.city);
    body.set('gender', u.gender);
    body.set('mail', u.mail);
    body.set('password', u.password);
    body.set('login', u.login);
    body.set('country', u.country);
    body.set('phone', u.phone);

    return this.hClient.post<any>(environment.api + '/user/register', body.toString(), this.httpOptions).pipe(
      map((response) => response.data)
    );
  }

  public logUser(log: string, pwd: string) : Observable<any> {
    const  body = new URLSearchParams();
    body.set('login', log);
    body.set('password',pwd);
    return this.hClient.post<any>(environment.api + '/user/login', body.toString(), this.httpOptions).pipe(
      tap((response) => response.data)
    );
  }
}
