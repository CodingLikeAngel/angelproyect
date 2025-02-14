import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from 'libs/angel-ui-components/src/lib/angel-ui-components/button/button.component';
import { InputComponent } from 'libs/angel-ui-components/src/lib/angel-ui-components/input/input.component';

@Component({
  selector: 'lib-post-content',
  standalone: true,
   imports: [CommonModule, FormsModule, InputComponent, ButtonComponent],
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss']
})
export class PostContentComponent {
  @Input() content = ''; // Recibe el contenido desde el padre
  @Output() contentCompletado = new EventEmitter<void>(); // Emite un evento cuando el contenido está listo
  
  pasoActual = 1;
  isEditable = true;

  guardarContenido() {
    if (this.content.trim()) {
      this.isEditable = false;
      this.pasoActual = 2;
    } else {
      alert('El contenido no puede estar vacío.');
    }
  }

  siguientePaso() {
    if (this.pasoActual === 2) {
      this.pasoActual = 3;
      this.contentCompletado.emit(); // Emite el evento cuando se termina el paso 3
    }
  }

  isDarkBackground(): boolean {
    // Lógica simple para determinar si el fondo es oscuro o no, 
    // podrías usar un cálculo de contraste real dependiendo del fondo.
    // Aquí solo usamos un valor de ejemplo
    return true; // Esto siempre retorna `true` por ahora, ajusta según el color del fondo.
  }
}
