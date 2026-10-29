import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  private urlApi = 'https://apipostfiles.azurewebsites.net/';

  constructor(private http: HttpClient) {}

  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
   
    formData.append('file', file, file.name);

    return this.http.post(this.urlApi + 'api/files/uploadfile', formData);
  }
}