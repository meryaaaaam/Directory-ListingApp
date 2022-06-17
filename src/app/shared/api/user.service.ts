import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



const baseUrl = "http://127.0.0.1:8000/api/users" ;
const model = "http://127.0.0.1:8000/api/makes" ;
const Active = "http://127.0.0.1:8000/api/userss/isActive" ;
const adresse = "http://127.0.0.1:8000/api/userss/update" ;
const state = "http://127.0.0.1:8000/api/provinces" ;
const search = "http://127.0.0.1:8000/api/allusers/" ;






@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  note(id , data) {
    return this.http.put("http://127.0.0.1:8000/api/note/"+id , data);
  }

  create(data)  {
    return this.http.post(baseUrl, data);
  }

  // create(data) : Observable<any>  {
  //   return this.http.post(baseUrl, data , httpOptions);
  // }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  getAll() {
    return this.http.get(baseUrl);
  }

  getAllListUser()
  {return this.http.get("http://127.0.0.1:8000/api/list/users") ; }



  getAllActifUsers()
  {return this.http.get(" http://127.0.0.1:8000/api/list/users/actifs") ; }



  getAllPredingUsers()
  {return this.http.get(" http://127.0.0.1:8000/api/list/users/preding") ; }

  isActive(id,data)
  {
    return this.http.put(`${Active}/${id}`, data)

   // return this.http.put(`${baseUrl}/${id}`, data);
  }


  updateAdress(id,data)
  {
    const headers = new HttpHeaders();
    return this.http.put(`${adresse}/${id}`, data,{
      headers:headers
    });

   // return this.http.put(`${baseUrl}/${id}`, data);
  }

  getAllStates()
  {
    return this.http.get(state) ;

   // return this.http.put(`${baseUrl}/${id}`, data);
  }
  // sendMails(id,data){
  //   return  this.http.get(`${mail}/${id}`,data)
  // }


  searchPro() { return this.http.get(search +"pro") ; }


  searchCompany() { return this.http.get(search +"company") ; }

  uploadData(id ,data){
    const headers = new HttpHeaders();
    return this.http.post(`http://127.0.0.1:8000/api/auth/upload-image/${id}`,data,{headers:headers});
  }
  }
