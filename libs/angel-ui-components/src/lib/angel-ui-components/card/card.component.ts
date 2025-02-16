import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  // Inputs requeridos
  @Input() image = '';         // URL de la imagen principal
  @Input() title = '';         // Título del post
  @Input() excerpt = '';       // Texto de resumen
  @Input() date = '';          // Fecha de publicación
  @Input() author = '';        // Nombre completo del autor
  @Input() readMoreUrl = '';   // Enlace para leer más

  // Nuevos inputs opcionales para el diseño mejorado
  @Input() category = 'Blog';          // Categoría del post
  @Input() authorInitials = 'UA';      // Iniciales del autor (2 letras)
  @Input() tag = 'actualidad';         // Etiqueta temática
  @Input() showCategoryOverlay = true; // Control para mostrar el overlay
  
  // Configuración opcional de colores
  @Input() gradientFrom = 'purple-600';
  @Input() gradientTo = 'pink-500';
  @Input() badgeColor = 'pink-100';
  @Input() badgeTextColor = 'pink-700';
}
