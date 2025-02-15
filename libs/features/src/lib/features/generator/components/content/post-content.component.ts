import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'libs/angel-ui-components/src/lib/angel-ui-components/button/button.component';
import { InputComponent } from 'libs/angel-ui-components/src/lib/angel-ui-components/input/input.component';


export interface Section {
  type: 'title' | 'paragraph' | 'image';
  content: string;
  imageUrl?: string;
}


@Component({
  selector: 'lib-post-content',
  standalone: true,
  imports: [CommonModule, ButtonComponent, InputComponent],
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss']
})
export class PostContentComponent {
  sections: Section[] = [];

  @Output() articleSaved = new EventEmitter<Section[]>();

  addSection(type: 'title' | 'paragraph' | 'image'): void {
    this.sections.push({ type, content: '' });
  }

  removeSection(index: number): void {
    this.sections.splice(index, 1);
  }

  isArticleValid(): boolean {
    return this.sections.length > 0 && this.sections.every(section => {
      if (section.type === 'image') {
        return section.imageUrl && section.imageUrl.trim() !== '';
      }
      return section.content.trim() !== '';
    });
  }

  guardarArticulo(): void {
    if (this.isArticleValid()) {
      this.articleSaved.emit(this.sections);
      alert('¡Artículo guardado exitosamente!');
    } else {
      alert('Por favor, completa todas las secciones antes de guardar.');
    }
  }

  onFileSelected(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file: File = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.sections[index].imageUrl = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
