import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { HttpResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthCredentials } from '../model/authCredentials.model';
import { User } from '../model/user.model';

@Injectable()
export class AuthenticationService {

  private baseUrl = "http://localhost:8089/"
  private authenticationUrl = 'oauth/token';


  constructor(private http: HttpClient,
              private router: Router) { }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'Authorization': 'Basic YnJhaW5CYWNrdXA6NDU2YmIyYTk5ODdiY2YzNmIxN2U0ZTAyNGVkNDcwMDkyOGY1OTE0NDM1MjlhODA3Y2RmNGRjNzg4MzZmOTNhMg=='
    })
  };
              
  authentication(authCredentials: AuthCredentials): Observable<User> {

    const body = new HttpParams()
      .set('username', authCredentials.username)
      .set('password', authCredentials.password)
      .set('grant_type', 'password');

    return this.http.post<User>(this.baseUrl + this.authenticationUrl, body, this.httpOptions)
  }
}
