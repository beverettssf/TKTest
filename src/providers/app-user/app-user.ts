import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { RegisterPage } from '../../pages/register/register';
import { LoginPage } from '../../pages/login/login';
/*
  Generated class for the AppUserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppUserProvider {

  constructor(public http: Http) {
    console.log('Hello AppUserProvider Provider');
  }
  
  baseUrl: string= "https://briannassf-phortonssf.c9users.io:8080/api"
  path: string= "/AppUsers"

  register(newUserData) {
    return this.http.post(
      this.baseUrl + this.path,
      newUserData
    );
  }

  login(userData) {
    return this.http.post(
      this.baseUrl + this.path + "/login",
      userData
    );
  }
  
  logout(token){
    return this.http.post(
      this.baseUrl + this.path + '/logout' + 
        '?access_token=' + token,
        {}
      );
  }
}
