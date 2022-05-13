import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseApiUrl = "http://127.0.0.1:8000/api/auth/upload-image" ;



@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { }

  upload(file):Observable<any> {


    const formData = new FormData();

    formData.append("file", file, file.name);

    return this.http.put("http://127.0.0.1:8000/api/auth/upload-image", formData)

}

}
