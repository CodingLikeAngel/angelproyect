import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'libs/angel-ui-components/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenAIService {
  
  private openAiUrl = environment.openAiUrl;
  private geminiUrl = environment.geminiUrl;
  private  openAiKey = environment.openAiKey;
  private geminiKey = environment.geminiKey;
  constructor(private http: HttpClient) {}

  sendMessage(messages: string[]): Observable<never> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.openAiKey}`
    });

    const body = {
      model: 'gpt-4o-mini-2024-07-18',
      messages: messages.map(content => ({ role: 'user', content }))
    };

    return this.http.post<never>(this.openAiUrl, body, { headers });
  }
}
