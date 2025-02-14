import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export  class OpenAIService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = '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';


  constructor(private http: HttpClient) {}

  sendMessage(userInput: string): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    };

    const body = {
      model: 'gpt-4o-mini-2024-07-18',
      messages: [{ role: 'user', content: userInput }],
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}