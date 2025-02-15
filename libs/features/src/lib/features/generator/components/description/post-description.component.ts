import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from 'libs/angel-ui-components/src/lib/angel-ui-components/button/button.component';
import { InputComponent } from 'libs/angel-ui-components/src/lib/angel-ui-components/input/input.component';

@Component({
  selector: 'lib-post-description',
  standalone: true,
  imports: [CommonModule, FormsModule, InputComponent, ButtonComponent],
  templateUrl: './post-description.component.html',
  styleUrls: ['./post-description.component.scss']
})
export class PostDescriptionComponent {
  @Input() description = '';
  @Output() descriptionCompletada = new EventEmitter<void>();

  pasoActual = 1;
  isEditable = true;

  guardarDescripcion() {
    if (this.description.trim()) {
      this.isEditable = false;
      this.pasoActual = 2;
    } else {
      alert('La descripción no puede estar vacía.');
    }
  }

  siguientePaso() {
    if (this.pasoActual === 2) {
      this.pasoActual = 3;
      this.descriptionCompletada.emit();
    }
  }

  isDarkBackground(): boolean {
    return true;
  }
}