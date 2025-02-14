import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AIService {
  private openAiUrl = 'https://api.openai.com/v1/chat/completions';
  private geminiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

  private openAiKey = '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';
  private geminiKey = 'AIzaSyAsVqlNUM9sVzJT0oKFtRtUaS3napzEBhg';

  useGemini = true; // Cambia a `false` para usar OpenAI

  constructor(private http: HttpClient) {}

  sendMessage(messages: string[]): Observable<any> {
    return this.useGemini ? this.sendGeminiMessage(messages) : this.sendOpenAIMessage(messages);
  }

  private sendOpenAIMessage(messages: string[]): Observable<never> {
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

  private sendGeminiMessage(messages: string[]): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      contents: [
        { parts: messages.map(text => ({ text })) }
      ]
    };

    return this.http.post<never>(`${this.geminiUrl}?key=${this.geminiKey}`, body, { headers });
  }
}
