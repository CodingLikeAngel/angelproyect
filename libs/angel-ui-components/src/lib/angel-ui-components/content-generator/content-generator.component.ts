import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AIContentService } from './ai-content.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'lib-content-generator',
  templateUrl: './content-generator.component.html',
  styleUrls: ['./content-generator.component.scss']
})
export class ContentGeneratorComponent {
  prompt = '';
  generatedContent = '';
  loading = false;

  @Output() contentGenerated: EventEmitter<string> = new EventEmitter<string>();
  constructor(private aiContentService: AIContentService) {}

  async generate() {
    if (this.prompt.trim()) {
      try {
        this.loading = true;
        this.generatedContent = '';
        // Genera el contenido a partir del prompt
        this.generatedContent = await this.aiContentService.generateContent(this.prompt);
        // Emite el contenido generado al componente padre
        this.contentGenerated.emit(this.generatedContent);
      } catch (error) {
        console.error('Error generando contenido', error);
        this.generatedContent = '❌ Error generando contenido. Por favor intenta nuevamente.';
        this.contentGenerated.emit(this.generatedContent);
      } finally {
        this.loading = false;
      }
    }
  }
}
