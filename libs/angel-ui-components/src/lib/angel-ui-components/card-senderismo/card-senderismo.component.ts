import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'lib-card-senderismo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-senderismo.component.html',
  styleUrls: ['./card-senderismo.component.scss'],
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
export class CardSenderismoComponent implements OnInit, AfterViewInit {
  @Input() routes: any[] = [
    {
      routeName: 'Ruta del Cares',
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
    },
    {
      routeName: 'Ruta de los Calderones',
      imageUrl: './calderones.jpg',
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
      routeName: 'Ruta de las Minas de Oro de Las Médulas',
      imageUrl: './medulas.jpg',
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
  @Input() index = 0;

  @Input() routeName = this.routes[this.index].routeName;
  @Input() imageUrl = this.routes[this.index].imageUrl;
  @Input() difficulty = this.routes[this.index].difficulty;
  @Input() rating = this.routes[this.index].rating;
  @Input() reviews = this.routes[this.index].reviews;
  @Input() duration = this.routes[this.index].duration;
  @Input() distance = this.routes[this.index].distance;
  @Input() ascent = this.routes[this.index].ascent;
  @Input() description = this.routes[this.index].description;
  @Input() features: any[] = this.routes[this.index].features;
  @Input() link = this.routes[this.index].link;

  isMobile = false;
  currentRouteIndex = 0;

  @ViewChild('postCard', { static: false }) postCard!: ElementRef;

  constructor(private deviceService: DeviceDetectorService) {}

  ngOnInit() {
    this.isMobile = this.deviceService.isMobile();
  }


  
  ngAfterViewInit() {
    if (this.isMobile && this.postCard) {
      const hammer = new Hammer(this.postCard.nativeElement);

      hammer.on('swipeleft', () => {
        this.changeRoute(1);
        console.log('Swipe left detected');
      });

      hammer.on('swiperight', () => {
        this.changeRoute(-1);
      });
    }
  }
  changeRoute(direction: number) {
    const newIndex = this.currentRouteIndex + direction;
    if (newIndex >= 0 && newIndex < this.routes.length) {
      this.currentRouteIndex = newIndex;
      this.routeName = this.routes[this.currentRouteIndex].routeName;
      this.imageUrl = this.routes[this.currentRouteIndex].imageUrl;
      this.difficulty = this.routes[this.currentRouteIndex].difficulty;
      this.rating = this.routes[this.currentRouteIndex].rating;
      this.reviews = this.routes[this.currentRouteIndex].reviews;
      this.duration = this.routes[this.currentRouteIndex].duration;
      this.distance = this.routes[this.currentRouteIndex].distance;
      this.ascent = this.routes[this.currentRouteIndex].ascent;
      this.description = this.routes[this.currentRouteIndex].description;
      this.features = this.routes[this.currentRouteIndex].features;
      this.link = this.routes[this.currentRouteIndex].link;
    }
  }
}