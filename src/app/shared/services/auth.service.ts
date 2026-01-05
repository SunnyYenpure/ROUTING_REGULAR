import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilogin, Iregister } from '../models/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  BASE_URL: string = 'https://auth-git-main-iamrkjs-projects.vercel.app';

  constructor(private _http: HttpClient) {}

  login(obj: Ilogin): Observable<any> {
    return this._http.post(`${this.BASE_URL}/api/auth/login`, obj);
  }

  signup(obj:Iregister):Observable<any>{
    return this._http.post(`${this.BASE_URL}/api/auth/register`, obj);
  }

  settoken(token:string){
    localStorage.setItem("token",token)
  }

    setuser(userole:string){
    localStorage.setItem("userrole",userole)
  }

    gettoken(){
  return  localStorage.getItem("token")!
  }

    getuser(){
   return localStorage.getItem("userrole")!
  }


}
