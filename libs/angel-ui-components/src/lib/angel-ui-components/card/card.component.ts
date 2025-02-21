import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { trigger, transition, style, animate } from '@angular/animations';
import * as Hammer from 'hammerjs'; // Importación corregida

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class CardComponent implements OnInit, AfterViewInit {
  @Input() posts: any[] = [
    {
      image: './cares.jpg',
      title: 'Ruta del Cares',
      excerpt: 'El "Desfiladero Divino", una ruta tallada en la roca entre León y Asturias.',
      date: '2025-02-19',
      author: 'Juan Pérez',
      readMoreUrl: './cares.jpg',
      category: 'Senderismo',
      tag: 'senderismo',
      authorInitials: 'JP',
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
      authorInitials: 'MG',
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
      authorInitials: 'CF',
    },
  ];

  @Input() index = 0;
  @Input() image = this.posts[this.index].image;
  @Input() title = this.posts[this.index].title;
  @Input() excerpt = this.posts[this.index].excerpt;
  @Input() date = this.posts[this.index].date;
  @Input() author = this.posts[this.index].author;
  @Input() readMoreUrl = this.posts[this.index].readMoreUrl;
  @Input() category = this.posts[this.index].category;
  @Input() authorInitials = this.posts[this.index].authorInitials;
  @Input() tag = this.posts[this.index].tag;
  @Input() showCategoryOverlay = true;

  isMobile = false;
  currentPostIndex = 0;

  @ViewChild('postCard', { static: false }) postCard!: ElementRef;

  dynamicStyles: {
    background: string;
    text: string;
    gradientFrom: string;
    gradientTo: string;
  } = {
    background: '',
    text: '',
    gradientFrom: '',
    gradientTo: '',
  };

  constructor(private deviceService: DeviceDetectorService) {}

  ngOnInit() {
    this.isMobile = this.deviceService.isMobile();
    this.dynamicStyles = this.getColorForTag();
  }

  ngAfterViewInit() {
    if (this.isMobile && this.postCard) {
      const hammer = new Hammer(this.postCard.nativeElement);

      hammer.on('swipeleft', () => {
        this.changePost(1);
        console.log('Swipe left detected');
      });

      hammer.on('swiperight', () => {
        this.changePost(-1);
      });
    }
  }

  getColorForTag() {
    const tagStyles: {
      [key: string]: {
        background: string;
        text: string;
        gradientFrom: string;
        gradientTo: string;
      };
    } = {
      pesca: {
        background: 'bg-[rgba(59,130,246,0.2)]',
        text: 'text-cyan-300',
        gradientFrom: 'rgba(59,130,246,0.8)',
        gradientTo: 'rgba(37,99,235,0.8)',
      },
      gastronomia: {
        background: 'bg-[rgba(236,72,153,0.2)]',
        text: 'text-pink-300',
        gradientFrom: 'rgba(236,72,153,0.8)',
        gradientTo: 'rgba(219,39,119,0.8)',
      },
      micologia: {
        background: 'bg-[rgba(34,197,94,0.2)]',
        text: 'text-green-300',
        gradientFrom: 'rgba(34,197,94,0.8)',
        gradientTo: 'rgba(22,163,74,0.8)',
      },
      senderismo: {
        background: 'bg-[rgba(234,179,8,0.2)]',
        text: 'text-yellow-300',
        gradientFrom: 'rgba(234,179,8,0.8)',
        gradientTo: 'rgba(202,138,4,0.8)',
      },
      default: {
        background: 'bg-[rgba(107,114,128,0.2)]',
        text: 'text-gray-300',
        gradientFrom: 'rgba(107,114,128,0.8)',
        gradientTo: 'rgba(75,85,99,0.8)',
      },
    };

    return tagStyles[this.tag.toLowerCase()] || tagStyles['default'];
  }

  changePost(direction: number) {
    const newIndex = this.currentPostIndex + direction;
    if (newIndex >= 0 && newIndex < this.posts.length) {
      this.currentPostIndex = newIndex;
      this.image = this.posts[this.currentPostIndex].image;
      this.title = this.posts[this.currentPostIndex].title;
      this.excerpt = this.posts[this.currentPostIndex].excerpt;
      this.date = this.posts[this.currentPostIndex].date;
      this.author = this.posts[this.currentPostIndex].author;
      this.readMoreUrl = this.posts[this.currentPostIndex].readMoreUrl;
      this.category = this.posts[this.currentPostIndex].category;
      this.authorInitials = this.posts[this.currentPostIndex].authorInitials;
      this.tag = this.posts[this.currentPostIndex].tag;
      this.dynamicStyles = this.getColorForTag();
    }
  }
}