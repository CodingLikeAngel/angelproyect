import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';
import { trigger, transition, style, animate } from '@angular/animations';
import * as Hammer from 'hammerjs';

interface Adventure {
  title: string;
  date: string;
  spots: number;
  difficulty: string;
  rating: number;
  guides: { name: string; photo: string }[];
  imageUrl: string;
}

@Component({
  selector: 'lib-card-next-adventures',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './card-next-adventures.component.html',
  styleUrls: ['./card-next-adventures.component.scss'],
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


export class CardNextAdventuresComponent implements OnInit, AfterViewInit {
  isMobile = false;


    
  adventures: Adventure[] = [
    {
      title: 'Ruta Otoñal',
      date: '15 Oct 2024',
      spots: 25,
      difficulty: 'Media',
      rating: 4.8,
      guides: [
        { name: 'Ana', photo: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { name: 'Carlos', photo: 'https://randomuser.me/api/portraits/men/1.jpg' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
    },
    {
      title: 'Ascenso Nocturno',
      date: '20 Nov 2024',
      spots: 15,
      difficulty: 'Alta',
      rating: 4.9,
      guides: [
        { name: 'Lucía', photo: 'https://randomuser.me/api/portraits/women/3.jpg' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
    },
    {
      title: 'Sendero Familiar',
      date: '5 Dic 2024',
      spots: 30,
      difficulty: 'Baja',
      rating: 4.7,
      guides: [
        { name: 'María', photo: 'https://randomuser.me/api/portraits/women/4.jpg' },
        { name: 'Juan', photo: 'https://randomuser.me/api/portraits/men/5.jpg' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
    },
  ];


  currentAdventureIndex = 0;
  @ViewChild('postCard', { static: false }) postCard!: ElementRef;


  constructor(
    private deviceService: DeviceDetectorService,
    private zone: NgZone // Añade NgZone
  ) {}

  ngOnInit() {
    this.isMobile = this.deviceService.isMobile();
    console.log('ngOnInit called, isMobile:', this.isMobile);
  }

    ngAfterViewInit() {
    if (this.isMobile && this.postCard) {
      const hammer = new Hammer(this.postCard.nativeElement);

      hammer.on('swipeleft', () => {
        this.changeAdventure(1);
        console.log('Swipe left detected');
      });

      hammer.on('swiperight', () => {
        this.changeAdventure(-1);
      });
    }
  }


  getGuideNames(adventure: Adventure): string {
    return adventure.guides.map(g => g.name).join(' & ');
  }

  getDifficultyColor(difficulty: string): string {
    switch (difficulty.toLowerCase()) {
      case 'baja': return 'var(--neon-green)';
      case 'media': return 'var(--neon-yellow)';
      case 'alta': return 'var(--neon-pink)';
      default: return 'var(--neon-cyan)';
    }
  }

  changeAdventure(direction: number) {
    const newIndex = this.currentAdventureIndex + direction;
    if (newIndex >= 0 && newIndex < this.adventures.length) {
      this.currentAdventureIndex = newIndex;
      console.log('Adventure changed to index:', this.currentAdventureIndex);
    }
  }
}