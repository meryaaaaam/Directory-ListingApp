import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(public http:HttpClient) { }

  getCountries() {
    return this.http.get('showcase/resources/data/countries.json')
                .toPromise()
                .then(res => <any[]> res.json().data)
                .then(data => { return data; });
}
}
