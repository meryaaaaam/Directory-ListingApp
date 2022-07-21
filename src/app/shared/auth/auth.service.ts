import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Password } from 'src/app/models/user/password';

const baseUrl = "http://127.0.0.1:8000/api/auth/";
//const baseUrl ="'https://backbottin.groupe3737.com/api/auth/";
const user = "http://127.0.0.1:8000/api/users/";


// User interface
export class User {
  name!: String;
  email!: String;
  password!: String;
  password_confirmation!: String;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  // User registration
  register(user: User): Observable<any> {
    return this.http.post(baseUrl+'register', user);
  }
  // Login
  signin(user): Observable<any> {
    return this.http.post<any>(baseUrl+'login', user);
  }
  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get(baseUrl+'user-profile');
  }


  UserCnt(): Observable<any> {
    return this.http.get(baseUrl+'profile');
  }
  GetUser(id): Observable<any> {
    return this.http.get(user+'update/',id );
  }

  Profile(): Observable<any> {
    return this.http.get(baseUrl+'user-profile');
  }

  roles(): Observable<any> {
    return this.http.get(baseUrl+'roles');}

  changepassword(password: Password): Observable<any> {
    return this.http.post(baseUrl+'new_pass' , password);
  }

}
