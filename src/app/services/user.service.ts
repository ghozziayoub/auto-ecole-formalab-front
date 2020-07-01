import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //https://jsonplaceholder.typicode.com/users

  //base URL
  private _baseUrl = "https://jsonplaceholder.typicode.com";
  private _baseLocalUrl = "http://localhost:3000";

  //API Routes
  //TEST
  private _getAllUsersUrl = this._baseUrl + "/users";
  //REAL Project
  private _registerUserUrl = this._baseLocalUrl + "/user/register";
  private _loginUserUrl = this._baseLocalUrl + "/user/login";

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any>(this._getAllUsersUrl);
  }

  registerUser(user: User) {
    return this.http.post<any>(this._registerUserUrl, user);
  }

  loginUser(user: User) {
    return this.http.post<any>(this._loginUserUrl, user);
  }

}
