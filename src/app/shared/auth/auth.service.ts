import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Password } from 'src/app/models/user/password';
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
    return this.http.post('https://backbottin.groupe3737.com/api/auth/register', user);
  }
  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>('https://backbottin.groupe3737.com/api/auth/login', user);
  }
  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('https://backbottin.groupe3737.com/api/auth/user-profile');
  }


  UserCnt(): Observable<any> {
    return this.http.get('https://backbottin.groupe3737.com/api/auth/profile');
  }
  GetUser(id): Observable<any> {
    return this.http.get('https://backbottin.groupe3737.com/api/users/update/',id );
  }

  Profile(): Observable<any> {
    return this.http.get('https://backbottin.groupe3737.com/api/auth/user-profile');
  }

  roles(): Observable<any> {
    return this.http.get('https://backbottin.groupe3737.com/api/auth/roles');}

  changepassword(password: Password): Observable<any> {
    return this.http.post('https://backbottin.groupe3737.com/api/auth/new_pass' , password);
  }

}
