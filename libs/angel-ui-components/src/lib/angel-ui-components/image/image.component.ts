import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-image',
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
@Input() src = '';
@Input() alt = '';
@Input() ancho = 'auto';
@Input() alto = 'auto';
@Input() borde = 'none';
@Input() sombra = 'none';
@Input() bordeRedondeado = 'none';
@Input() opacidad = '1';
@Input() filtro = 'none';
@Input() transicion = 'none';
}
