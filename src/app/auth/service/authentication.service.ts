import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { HttpResponse, HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthenticationService {


  private baseUrl = "http://localhost:8080/"
  private authenticationUrl = 'auth';


  constructor(private http: HttpClient,
              private router: Router) { }
              
  authentication(username: string, password: string): Observable<boolean> {
    //return this.http.post(this.baseUrl + this.authenticationUrl, JSON.stringify({username: username, password: password}))
    return new Observable;
  }
}
