import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://api-production-ec1c.up.railway.app/api';

  constructor(private http: HttpClient) {}


  // Crear una nueva publicación
  createPost(postData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts`, postData);
  }

  // Obtener una publicación por ID
  getPostById(postId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts/${postId}`);
  }

  getAllPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts`);
  }




}