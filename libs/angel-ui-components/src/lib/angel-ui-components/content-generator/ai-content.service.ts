import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AIContentService {
  private openAiUrl = 'https://api.openai.com/v1/chat/completions';
  private geminiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
 
  private openAiKey = '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';
  private geminiKey = 'AIzaSyAsVqlNUM9sVzJT0oKFtRtUaS3napzEBhg';

  // Cambia a false para usar OpenAI
  public useGemini = true; 

  constructor(private http: HttpClient) {}

  async generateContent(prompt: string): Promise<string> {
    if (this.useGemini) {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const body = {
        contents: [{
          parts: [{ text: prompt }]
        }]
      };
      const response = await firstValueFrom(
        this.http.post<any>(`${this.geminiUrl}?key=${this.geminiKey}`, body, { headers })
      );
      return response.candidates[0].content.parts[0].text;
    } else {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.openAiKey}`
      });
      const body = {
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: 'Eres un generador de contenido experto.' },
          { role: 'user', content: prompt }
        ]
      };
      const response = await firstValueFrom(
        this.http.post<any>(this.openAiUrl, body, { headers })
      );
      return response.choices[0].message.content;
    }
  }


  async beautifyHtml(htmlContent: string): Promise<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      contents: [{
        parts: [{
          text: `Por favor, formatea el siguiente contenido como HTML sin incluir delimitadores de código: ${htmlContent}`
        }]
      }]
    };
    const response = await firstValueFrom(
      this.http.post<any>(`${this.geminiUrl}?key=${this.geminiKey}`, body, { headers })
    );
    return response.candidates[0].content.parts[0].text;
  }
  
  
}
