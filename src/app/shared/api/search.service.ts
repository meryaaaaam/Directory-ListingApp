import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//const baseUrl = "http://127.0.0.1:8000/api/";
const baseUrl = "https://backbottin.groupe3737.com/api/" ;
/*const url =     "https://backbottin.groupe3737.com/api/users" ;
const searchAll = "https://backbottin.groupe3737.com/api/searchAll" ;
const search = "https://backbottin.groupe3737.com/api/searchByLabel" ;
const lastone = "https://backbottin.groupe3737.com/api/Search/AllItem" ;


 const baseUrl = "http://127.0.0.1:8000/api/all/search" ;
const searchAll = "http://127.0.0.1:8000/api/searchAll" ;
const search = "http://127.0.0.1:8000/api/searchByLabel" ;
const lastone = "http://127.0.0.1:8000/api/Search/AllItem" ;
*/

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }


  Search(data) {
    return this.http.get(baseUrl+"all/search" , data);
  }

  searchusers(label , state , IACNC)
  { return this.http.get(baseUrl+"Search" ,{params: {label:label, state : state, IACNC : IACNC }});}



  result(label){
    const headers = new HttpHeaders();
    return this.http.get(`${baseUrl+"Search/AllItem"}/${label}`,{
      headers:headers
    });
    // return this.http.put(`${baseUrl}/${id}`, data);
  }

  searchAll(){
    const headers = new HttpHeaders();
    return this.http.get(`${baseUrl+"users"}`,{
      headers:headers
    });
    // return this.http.put(`${baseUrl}/${id}`, data);
  }

  searchTriProvince(label,t)
  {

    return this.http.get(`${baseUrl+"Search/AllItem"}/${label}`,{params: {tri:t }})  ;
  }


  searchwithIACNC(label,t)
  {

    return this.http.get(`${baseUrl+"Search/AllItem"}/${label}`,{params: {IACNC:t }})  ;
  }


  searcAllhwithIACNC(t)
  {

    return this.http.get(`${baseUrl+"users"}`,{params: {IACNC:t }})  ;
  }

  SearchByLabel() {
    return this.http.get(baseUrl+"searchByLabel");
  }



}
