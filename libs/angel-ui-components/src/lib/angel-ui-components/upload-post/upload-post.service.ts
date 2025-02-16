// post.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadPostService {
  // Actualiza la URL de la API a la de producción
  private apiUrl = 'https://api-production-ec1c.up.railway.app/api/posts';

  constructor(private http: HttpClient) {}

  createPost(postData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, postData);
  }
}
