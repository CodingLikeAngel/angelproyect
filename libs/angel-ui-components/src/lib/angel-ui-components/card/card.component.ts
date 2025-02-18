import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {
  // Inputs
  @Input() image = '';
  @Input() title = '';
  @Input() excerpt = '';
  @Input() date = '';
  @Input() author = '';
  @Input() readMoreUrl = '';
  @Input() category = 'Blog';
  @Input() authorInitials = 'UA';
  @Input() tag = 'actualidad';
  @Input() showCategoryOverlay = true;

  dynamicStyles: { background: string; text: string; gradientFrom: string; gradientTo: string } = {
    background: '',
    text: '',
    gradientFrom: '',
    gradientTo: ''
  };
  

  ngOnChanges(changes: SimpleChanges): void {
    // Al detectar cambios, actualizamos los estilos dinámicos con la función
    this.dynamicStyles = this.getColorForTag();
  }

  // Función para obtener los colores dinámicamente según el tag
  getColorForTag() {
    const tagStyles: { [key: string]: { background: string; text: string; gradientFrom: string; gradientTo: string } } = {
      'pesca': {
        background: 'bg-blue-100',
        text: 'text-blue-700',
        gradientFrom: 'rgb(59 130 246)', // azul
        gradientTo: 'rgb(37 99 235)' // azul más oscuro
      },
      'gastronomia': {
        background: 'bg-red-100',
        text: 'text-red-700',
        gradientFrom: 'rgb(248 113 113)', // rojo
        gradientTo: 'rgb(220 38 38)' // rojo más oscuro
      },
      'micologia': { // Aquí usamos verde
        background: 'bg-green-100',
        text: 'text-green-700',
        gradientFrom: 'rgb(34 197 94)', // verde claro
        gradientTo: 'rgb(22 163 74)' // verde más oscuro
      },
      'senderismo': {
        background: 'bg-amber-200',
        text: 'text-amber-700',
        gradientFrom: 'rgb(251 146 60)', // ámbar
        gradientTo: 'rgb(220 79 58)' // ámbar oscuro
      },
      'default': {
        background: 'bg-gray-100',
        text: 'text-gray-700',
        gradientFrom: 'rgb(107 114 128)', // gris
        gradientTo: 'rgb(75 85 99)' // gris más oscuro
      }
    };

    console.log(this.tag.toLowerCase());
    return tagStyles[this.tag.toLowerCase()] || tagStyles['default'];
  }
}
