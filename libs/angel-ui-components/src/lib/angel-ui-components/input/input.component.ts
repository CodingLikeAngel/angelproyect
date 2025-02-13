import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  // @Input() para pasar datos desde el componente padre
  @Input() placeholder = 'Type something...'; // Texto por defecto
  @Input() value = ''; // Valor inicial del input
  @Input() label = ''; // Etiqueta del input
  @Input() type = 'text'; // Tipo de input, como 'text' o 'password'
  @Input() accessibilityDescription?: string;
  
  // @Output() para emitir eventos hacia el componente padre
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>(); // Evento de cambio de valor

  // Método para emitir el cambio de valor
  onValueChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.valueChange.emit(inputElement.value);
  }
}
