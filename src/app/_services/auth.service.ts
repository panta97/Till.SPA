import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  baseUrl = environment.apiUrl + 'auth/login';

  constructor(private http: HttpClient) { }

  login(model: any): Observable<any> {

    return this.http.post(this.baseUrl, model, {headers: new HttpHeaders()
      .set('Content-Type', 'application/json')})
      .map((response: Response) => {
      const user: any = response;
      if (user) {
        localStorage.setItem('token', user.tokenString);
      }
    });
  }

  loggedIn(): boolean {
    
    if(!localStorage.getItem('token')) {
      return false;
    }
    

    const helper = new JwtHelperService();
    return !helper.isTokenExpired(localStorage.getItem('token'));
  }

}