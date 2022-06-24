import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Search } from 'src/app/models/service/search';

const url ="http://127.0.0.1:8000/api/";
const baseUrl = "http://127.0.0.1:8000/api/categories" ;
const sub = "http://127.0.0.1:8000/api/sub-category" ;
const service = "http://127.0.0.1:8000/api/services" ;
const s = "http://127.0.0.1:8000/api/auth/search-services" ;
const cat = "http://127.0.0.1:8000/api/UserByCat" ;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getservBysub(data )
  {
    return this.http.get("http://127.0.0.1:8000/api/search-servicesbysub", data);

  }


getSubByCat(data)
{
  return this.http.get('http://127.0.0.1:8000/api/getsubbycat/'+data);
 // return this.http.get(url+'SearchByLabel',   data);
}
  getAllCategories() {
    return this.http.get(baseUrl );
  }

  getAllSubCategory() {
    return this.http.get(sub );
  }


  getAllServices() {
    return this.http.get(service );
  }

  serachService(label){
    return this.http.get(`${s}/${label}`)
  }


  searchCategories(label)
  {return this.http.get(`${baseUrl}/${label}`)}


  getServiceByID(id)
  {return this.http.get(`${service}/${id}`)}

  getUserbyCat(id)
  {
    return this.http.get(`${cat}/${id}`)
  }

}
