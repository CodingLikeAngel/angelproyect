import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentGeneratorComponent } from './../../../../../../libs/angel-ui-components/src/lib/angel-ui-components/content-generator/content-generator.component';
import { PostTitleComponent } from './components/title/post-title.component';
import { PostContentComponent, Section } from './components/content/post-content.component';
import { PostDescriptionComponent } from './components/description/post-description.component';
import { AIContentService } from 'libs/angel-ui-components/src/lib/angel-ui-components/content-generator/ai-content.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'lib-generator',
  standalone: true,
  imports: [CommonModule, ContentGeneratorComponent, PostTitleComponent, PostContentComponent , PostDescriptionComponent],
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {
  generatedContent = '';
  mostrarContenido = false; // Inicialmente el contenido no es visible
  // Variables para título, contenido, y nuevas secciones
  postDescription = '';
  postDate = '';
  postAuthor = '';

  mostrarImagen = false;
  mostrarDescripcion = false;
  mostrarFechaYAutor = false;

  title = 'Título de la publicación';
  description = 'Descripción breve de la publicación.';
  content = 'Contenido completo de la publicación.';
  imageUrl = '';
  isContentVisible = false;
  constructor(private aiContentService: AIContentService, private sanitizer: DomSanitizer) {}
  
  ngOnInit() {
    // Asignar valores por defecto o desde un formulario, API, etc.
    this.generatedContent = 'Título de mi post';
    this.postDescription = 'Esta es una descripción corta del post.';
    this.postDate = '14 de febrero, 2025';
    this.postAuthor = 'Juan Pérez';
    // Por defecto se puede dejar una imagen de placeholder o vacía
    this.imageUrl = 'https://via.placeholder.com/800x400';

    // Control de visibilidad de elementos
    this.mostrarContenido = true;
    this.mostrarImagen = true;
    this.mostrarDescripcion = true;
    this.mostrarFechaYAutor = true;
  }
  onDescriptionCompletada() {
    console.log('Descripción completada');
    // Lógica adicional si es necesaria
  }

  toggleContent() {
    this.isContentVisible = !this.isContentVisible;
  }

  onPasoCompletado() {
    console.log('Título completado');
    this.mostrarContenido = true;
  }
  async onArticleSaved(sections: Section[]): Promise<void> {
    // Objeto para almacenar los marcadores y su HTML de imagen correspondiente.
    const imagePlaceholders: { [key: string]: string } = {};
    let imageCounter = 0;
  
    // Construir el HTML sin imágenes, insertando un marcador de posición en forma de <span>.
    const rawHtml = sections.map(section => {
      if (section.type === 'title') {
        const formattedTitle = section.content.replace(/\n/g, '<br>');
        return `<h2>${formattedTitle}</h2>`;
      } else if (section.type === 'paragraph') {
        const formattedParagraph = section.content.replace(/\n/g, '<br>');
        return `<p>${formattedParagraph}</p>`;
      } else if (section.type === 'image' && section.imageUrl) {
        // Crear un marcador único para la imagen.
        const markerId = `IMAGE_PLACEHOLDER_${imageCounter}`;
        const placeholder = `<span id="${markerId}"></span>`;
        // Almacenar el HTML de la imagen correspondiente al marcador.
        imagePlaceholders[markerId] = `<img src="${section.imageUrl}" alt="Imagen del artículo" class="mb-4 max-w-full h-auto" />`;
        imageCounter++;
        return placeholder;
      }
      return '';
    }).join('');
  
    // Enviar solo el contenido textual (con marcadores) al servicio de embellecimiento.
    const beautifiedHtml = await this.aiContentService.beautifyHtml(rawHtml);
  
    // Reemplazar los marcadores con el HTML de las imágenes.
    let finalHtml = beautifiedHtml;
    Object.keys(imagePlaceholders).forEach(key => {
      // Genera el marcador que usaste en el HTML.
      const marker = `<span id="${key}"></span>`;
      finalHtml = finalHtml.replace(marker, imagePlaceholders[key]);
    });
  
    // Si usas [innerHTML] en tu template, podrías necesitar bypass el sanitizador:
    // this.generatedContent = this.sanitizer.bypassSecurityTrustHtml(finalHtml);
  
    // Asignar el HTML final con imágenes inyectadas.
    this.generatedContent = finalHtml;
  }
  

  onContentCompletado() {
    console.log('Contenido completado');
  }

  handleGeneratedContent(content: string) {
    console.log('Contenido generado:', content);
    this.generatedContent = content;
  }

  // Método para manejar la subida de imagen
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file: File = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.imageUrl = e.target?.result as string;
        this.mostrarImagen = true;
      };
      reader.readAsDataURL(file);
    }
  }
}
