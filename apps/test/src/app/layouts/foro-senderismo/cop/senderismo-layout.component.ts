import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { HammerModule } from '@angular/platform-browser';
import { PostListComponent } from '@angel/features';
import {
  CardComponent,
  CardNextAdventuresComponent,
  CardSenderismoComponent,
  WeatherComponent,
  SectionImageComponent,
  CaracteristicasComponent,
  HeroSectionComponent,
  NavBarComponent,
  CardComercioComponent
} from '@angel/angel-ui-components';

interface Route {
  name: string;
  imageUrl: string;
  difficulty: string;
  rating: number;
  reviews: number;
  duration: number;
  distance: number;
  ascent: number;
  description: string;
  features: string[];
  link: string;
  tag?: string;
}

interface Post {
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
  standalone: true,
  imports: [
    HammerModule,
    CommonModule,
    NgOptimizedImage,
    PostListComponent,
    CardComponent,
    WeatherComponent,
    CardSenderismoComponent,
    CardNextAdventuresComponent,
    SectionImageComponent,
    CaracteristicasComponent,
    HeroSectionComponent,
    NavBarComponent,
    CardComercioComponent
  ],
  templateUrl: './senderismo-layout.component.html',
  styleUrls: ['./senderismo-layout.component.scss']
})
export class SenderismoLayoutComponent implements AfterViewInit, OnDestroy {
  isMobile = false;
  currentSectionIndex = 0;
  sections: string[] = ['hero', 'rutas', 'posts', 'adventures', 'features'];

  // Inicializamos postsByTag con un valor por defecto para "senderismo"
  postsByTag: Map<string, { posts: Post[], currentIndex: number }> = new Map([
    ['senderismo', { posts: [], currentIndex: 0 }]
  ]);

  routes: Route[] = [
    {
      name: 'Ruta del Cares',
      imageUrl: './cares.jpg',
      difficulty: 'Dificultad Alta',
      rating: 4.9,
      reviews: 128,
      duration: 5,
      distance: 12,
      ascent: 850,
      description: 'Ascenso panorámico con vistas a los valles leoneses, atravesando los desfiladeros del río Cares.',
      features: ['Guía GPS descargable', '3 puntos de avituallamiento', 'Zonas de acampada autorizadas'],
      link: '/ruta/ruta-del-cares',
      tag: 'senderismo'
    },
    {
      name: 'Ruta de los Calderones',
      imageUrl: './calderones.jpg',
      difficulty: 'Dificultad Media',
      rating: 4.7,
      reviews: 102,
      duration: 4,
      distance: 10,
      ascent: 600,
      description: 'Ruta circular que recorre las hoces del río Torío, ofreciendo paisajes impresionantes.',
      features: ['Sendero bien señalizado', 'Miradores naturales', 'Fauna y flora autóctona'],
      link: '/ruta/ruta-de-los-calderones',
      tag: 'senderismo'
    },
    {
      name: 'Ruta de las Minas de Oro de Las Médulas',
      imageUrl: './medulas.jpg',
      difficulty: 'Dificultad Baja',
      rating: 4.8,
      reviews: 150,
      duration: 3,
      distance: 8,
      ascent: 200,
      description: 'Recorrido por el paisaje cultural de Las Médulas, Patrimonio de la Humanidad.',
      features: ['Sendero interpretativo', 'Centros de información', 'Vistas panorámicas'],
      link: '/ruta/las-medulas',
      tag: 'senderismo'
    }
  ];

  posts: Post[] = [
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

  constructor(
    private deviceService: DeviceDetectorService,
    private router: Router,
    private el: ElementRef
  ) {
    this.isMobile = this.deviceService.isMobile();
    this.filterSenderismo();
  }

  ngAfterViewInit() {
    document.addEventListener('keydown', this.handleKeydown.bind(this));
  }

  filterSenderismo() {
    this.routes = this.routes.filter(route => route.tag === 'senderismo');
    this.posts = this.posts.filter(post => post.tag === 'senderismo');
    this.processPosts(this.posts);
  }

  private processPosts(posts: Post[]) {
    this.postsByTag.set('senderismo', { posts, currentIndex: 0 });
  }

  get postsArray(): Post[] {
    const tagData = this.postsByTag.get('senderismo');
    return tagData ? [tagData.posts[tagData.currentIndex]] : [];
  }

  onSwipe(tag: string, direction: 'left' | 'right') {
    if (tag !== 'senderismo') return;

    const tagData = this.postsByTag.get(tag);
    if (!tagData) return;

    const { posts, currentIndex } = tagData;
    let newIndex = currentIndex;

    if (direction === 'left' && currentIndex < posts.length - 1) {
      newIndex = currentIndex + 1;
    } else if (direction === 'right' && currentIndex > 0) {
      newIndex = currentIndex - 1;
    }

    if (newIndex !== currentIndex) {
      this.postsByTag.set(tag, { posts, currentIndex: newIndex });
    }
  }

  handleKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (this.currentSectionIndex < this.sections.length - 1) {
          this.currentSectionIndex++;
          this.scrollToSection(this.sections[this.currentSectionIndex]);
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (this.currentSectionIndex > 0) {
          this.currentSectionIndex--;
          this.scrollToSection(this.sections[this.currentSectionIndex]);
        }
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.scrollToSection('rutas');
        break;
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngOnDestroy() {
    document.removeEventListener('keydown', this.handleKeydown.bind(this));
  }

  navigateToUpload() {
    this.router.navigate(['/upload-posts/senderismo']);
  }
}