import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Search } from 'src/app/models/service/search';

/*const url ="http://127.0.0.1:8000/api/";
const baseUrl = "http://127.0.0.1:8000/api/categories" ;
const sub = "http://127.0.0.1:8000/api/sub-category" ;
const service = "http://127.0.0.1:8000/api/services" ;
const s = "http://127.0.0.1:8000/api/auth/search-services" ;
const cat = "http://127.0.0.1:8000/api/UserByCat" ;

*/
const url ="https://backbottin.groupe3737.com/api/";
const baseUrl = "https://backbottin.groupe3737.com/api/categories" ;
const sub = "https://backbottin.groupe3737.com/api/sub-category" ;
const service = "https://backbottin.groupe3737.com/api/services" ;
const s =       "https://backbottin.groupe3737.com/api/auth/search-services" ;
const cat = "https://backbottin.groupe3737.com/api/UserByCat" ;


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
    let params = new HttpParams().set('sub',data );
   // return this.http.get("http://127.0.0.1:8000/api/search-services-bysub", {params: params });
    return this.http.get("https://backbottin.groupe3737.com/api/search-services-bysub", {params: params });

  }


getSubByCat(data)
{
  //return this.http.get('bottin.groupe3737.com/api/getsubbycat/'+data);
  return this.http.get('https://backbottin.groupe3737.com/api/getsubbycat/'+data);
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
