import { Component } from '@angular/core';
import { AIService } from './ai.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'lib-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  messages = [
    { sender: 'bot', content: '¡Hola! ¿Cómo puedo ayudarte hoy?' }
  ];
  newMessage = '';

  constructor(private aiService: AIService) {}

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ sender: 'user', content: this.newMessage });
      this.newMessage = '';

      const messageContents = this.messages.map(msg => msg.content);
      this.aiService.sendMessage(messageContents).subscribe({
        next: (response) => {
          const botResponse = this.aiService.useGemini
            ? response.candidates[0].content.parts[0].text
            : response.choices[0].message.content;

          this.messages.push({ sender: 'bot', content: botResponse });
        },
        error: (error) => {
          console.error('Error al enviar el mensaje:', error);
          this.messages.push({ sender: 'bot', content: 'Hubo un error, intenta nuevamente.' });
        }
      });
    }
  }
}
