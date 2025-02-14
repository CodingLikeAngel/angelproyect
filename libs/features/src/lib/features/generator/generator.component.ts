import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentGeneratorComponent } from './../../../../../../libs/angel-ui-components/src/lib/angel-ui-components/content-generator/content-generator.component';
import { PostTitleComponent } from './../../../../../../libs/features/src/lib/features/generator/components/post-title.component';
@Component({
  selector: 'lib-generator',
  standalone: true,
  imports: [CommonModule, ContentGeneratorComponent, PostTitleComponent],
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {
  generatedContent: string = '';

  handleGeneratedContent(content: string) {
    console.log('Contenido generado:', content);
    this.generatedContent = content;
  }
}

