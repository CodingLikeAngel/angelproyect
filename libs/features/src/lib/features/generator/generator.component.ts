import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentGeneratorComponent } from './../../../../../../libs/angel-ui-components/src/lib/angel-ui-components/content-generator/content-generator.component';
import { PostTitleComponent } from './components/title/post-title.component';
import { PostContentComponent } from './components/content/post-content.component';


@Component({
  selector: 'lib-generator',
  standalone: true,
  imports: [CommonModule, ContentGeneratorComponent, PostTitleComponent, PostContentComponent],
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {
  generatedContent = '';
  mostrarContenido = false; // Inicialmente el contenido no es visible

  onPasoCompletado() {
    // Podemos hacer cualquier cosa, por ejemplo, cambiar una variable
    console.log('Título completado');
    this.mostrarContenido = true;
  }

  // Cuando el paso 3 de PostContent se complete
  onContentCompletado() {
    console.log('Contenido completado');
  }

  handleGeneratedContent(content: string) {
    console.log('Contenido generado:', content);
    this.generatedContent = content;
  }
}

