import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseUrl = "https://backbottin.groupe3737.com/api/all/search" ;
const url =     "https://backbottin.groupe3737.com/api/users" ;
const searchAll = "https://backbottin.groupe3737.com/api/searchAll" ;
const search = "https://backbottin.groupe3737.com/api/searchByLabel" ;
const lastone = "https://backbottin.groupe3737.com/api/Search/AllItem" ;


/*const baseUrl = "http://127.0.0.1:8000/api/all/search" ;
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
    return this.http.get(baseUrl , data);
  }


  result(label){
    const headers = new HttpHeaders();
    return this.http.get(`${lastone}/${label}`,{
      headers:headers
    });
    // return this.http.put(`${baseUrl}/${id}`, data);
  }

  searchAll(){
    const headers = new HttpHeaders();
    return this.http.get(`${url}`,{
      headers:headers
    });
    // return this.http.put(`${baseUrl}/${id}`, data);
  }

  searchTriProvince(label,t)
  {

    return this.http.get(`${lastone}/${label}`,{params: {tri:t }})  ;
  }


  searchwithIACNC(label,t)
  {

    return this.http.get(`${lastone}/${label}`,{params: {IACNC:t }})  ;
  }


  searcAllhwithIACNC(t)
  {

    return this.http.get(`${url}`,{params: {IACNC:t }})  ;
  }

  SearchByLabel() {
    return this.http.get(search);
  }



}
