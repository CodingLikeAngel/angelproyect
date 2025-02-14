import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenAIService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = 'tu_clave_de_api_aqui';

  constructor(private http: HttpClient) {}

  sendMessage(messages: string[]): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
      model: 'gpt-4',
      messages: messages.map(content => ({ role: 'user', content }))
    };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
