import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenAIService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = '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';

  constructor(private http: HttpClient) {}

  sendMessage(messages: string[]): Observable<never> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
      model: 'gpt-4o-mini-2024-07-18',
      messages: messages.map(content => ({ role: 'user', content }))
    };

    return this.http.post<never>(this.apiUrl, body, { headers });
  }
}
