import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://api-production-ec1c.up.railway.app/api';

  private postCreated = new Subject<void>();  

  constructor(private http: HttpClient) {}

  // Emite un evento cuando se crea un post
  notifyPostCreated() {
    this.postCreated.next();
  }

  // Observable para suscribirse a la creación de posts
  get postCreated$() {
    return this.postCreated.asObservable();
  }

  // Crear una nueva publicación
  createPost(postData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts`, postData);
  }

  // Obtener una publicación por ID
  getPostById(postId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts/${postId}`);
  }

  // Obtener todos los posts
  getAllPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts`);
  }

  // Obtener posts por tag
  getPostsByTag(tag: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts/tag/${tag}`);
  }
}
