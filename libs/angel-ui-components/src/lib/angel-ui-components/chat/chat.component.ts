import { Component } from '@angular/core';
import { OpenAIService } from './openai.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule,FormsModule],
  selector: 'lib-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent {
  messages = [
    { sender: 'bot', content: '¡Hola! ¿Cómo puedo ayudarte hoy?' }
  ];
  newMessage = '';

  constructor(private openAIService: OpenAIService) {}
  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ sender: 'user', content: this.newMessage });
      this.newMessage = '';
      const messageContents = this.messages.map(msg => msg.content);
      this.openAIService.sendMessage(messageContents).subscribe({
        next: (response) => {
          this.messages.push({ sender: 'bot', content: response.choices[0].message.content });
        },
        error: (error) => {
          console.error('Error al enviar el mensaje:', error);
        }
      });
    }
  }
  
}
