import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PostListComponent } from '@angel/features';
import { CardComponent, CardNextAdventuresComponent, CardSenderismoComponent, WeatherComponent, SectionImageComponent, CaracteristicasComponent, HeroSectionComponent, NavBarComponent, CardComercioComponent } from '@angel/angel-ui-components';


interface Ruta {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readMoreUrl: string;
  category: string;
  tag: string;
  authorInitials: string;
}



@Component({
  selector: 'app-senderismo-layout',
  imports: [CommonModule, PostListComponent , CardComponent, WeatherComponent,CardSenderismoComponent, CardNextAdventuresComponent, SectionImageComponent,CaracteristicasComponent, HeroSectionComponent, NavBarComponent, CardComercioComponent],
  templateUrl: './senderismo-layout.component.html',
  styleUrl: './senderismo-layout.component.scss',
})
export class SenderismoLayoutComponent {
  posts: any[] = [
    {
      image: './cares.jpg',
      title: 'Ruta del Cares',
      excerpt: 'El "Desfiladero Divino", una ruta tallada en la roca entre León y Asturias.',
      date: '2025-02-19',
      author: 'Juan Pérez',
      readMoreUrl: './cares.jpg',
      category: 'Senderismo',
      tag: 'senderismo',
      authorInitials: 'JP'
    },
    {
      image: './lago-babia.jpg',
      title: 'Lago de Babia',
      excerpt: 'Un recorrido impresionante por la Reserva de la Biosfera de Babia, León.',
      date: '2025-02-19',
      author: 'María Gómez',
      readMoreUrl: './lago-babia.jpg',
      category: 'Senderismo',
      tag: 'senderismo',
      authorInitials: 'MG'
    },
    {
      image: './busmayor.jpg',
      title: 'Hayedo de Busmayor',
      excerpt: 'Una mágica ruta entre bosques de hayas, ideal para disfrutar del otoño en León.',
      date: '2025-02-19',
      author: 'Carlos Fernández',
      readMoreUrl: './busmayor.jpg',
      category: 'Senderismo',
      tag: 'senderismo',
      authorInitials: 'CF'
    }
  ];
  
  comercios = [
    {
      nombre: 'Tienda de Equipos',
      imagen: 'https://images.unsplash.com/photo-1588666309990-d68f08e3e4a6?auto=format&fit=crop&w=800&q=80',
      descripcion: 'Equipamiento para senderismo y actividades al aire libre.',
      direccion: 'Calle de la Aventura 123, Ciudad Montañera',
      link: 'https://tiendadeequipos.com'
    },
    {
      nombre: 'Cafetería Montañera',
      imagen: 'https://images.unsplash.com/photo-1588666309990-d68f08e3e4a6?auto=format&fit=crop&w=800&q=80',
      descripcion: 'El mejor café y snacks para recargar energías en el camino.',
      direccion: 'Avenida del Sendero 456, Ciudad Montañera',
      link: 'https://cafeteriamontanera.com'
    },
    {
      nombre: 'Librería de la Montaña',
      imagen: 'https://images.unsplash.com/photo-1588666309990-d68f08e3e4a6?auto=format&fit=crop&w=800&q=80',
      descripcion: 'Libros y guías sobre naturaleza y aventuras.',
      direccion: 'Plaza del Bosque 789, Ciudad Montañera',
      link: 'https://libreriamontana.com'
    }
  ];
  routes = [
    {
      name: 'Ruta del Cares',
      imageUrl: './cares.jpg', // Imagen representativa
      difficulty: 'Dificultad Alta',
      rating: 4.9,
      reviews: 128,
      duration: 5,
      distance: 12,
      ascent: 850,
      description: 'Ascenso panorámico con vistas a los valles leoneses, atravesando los desfiladeros del río Cares.',
      features: ['Guía GPS descargable', '3 puntos de avituallamiento', 'Zonas de acampada autorizadas'],
      link: '/ruta/ruta-del-cares',
    },
    {
      name: 'Ruta de los Calderones',
      imageUrl: './calderones.jpg', // Imagen representativa
      difficulty: 'Dificultad Media',
      rating: 4.7,
      reviews: 102,
      duration: 4,
      distance: 10,
      ascent: 600,
      description: 'Ruta circular que recorre las hoces del río Torío, ofreciendo paisajes impresionantes y vistas espectaculares.',
      features: ['Sendero bien señalizado', 'Miradores naturales', 'Fauna y flora autóctona'],
      link: '/ruta/ruta-de-los-calderones',
    },
    {
      name: 'Ruta de las Minas de Oro de Las Médulas',
      imageUrl: './medulas.jpg', // Imagen representativa
      difficulty: 'Dificultad Baja',
      rating: 4.8,
      reviews: 150,
      duration: 3,
      distance: 8,
      ascent: 200,
      description: 'Recorrido por el paisaje cultural de Las Médulas, Patrimonio de la Humanidad, con formaciones geológicas únicas.',
      features: ['Sendero interpretativo', 'Centros de información', 'Vistas panorámicas'],
      link: '/ruta/las-medulas',
    },
  ];
  
    constructor(private router: Router) {}
  
    navigateToUpload() {
      this.router.navigate(['/upload-posts/senderismo']);
    }


}
