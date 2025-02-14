import { Component } from '@angular/core';
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


  constructor(private aiContentService: AIContentService) {}


  async generate() {
    if (this.prompt.trim()) {
      try {
        this.loading = true;
        this.generatedContent = '';
        this.generatedContent = await this.aiContentService.generateContent(this.prompt);
      } catch (error) {
        console.error('Error generando contenido', error);
        this.generatedContent = '❌ Error generando contenido. Por favor intenta nuevamente.';
      } finally {
        this.loading = false;
      }
    }
  }
}

