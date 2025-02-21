import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, AfterViewInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { trigger, transition, style, animate } from '@angular/animations';
import * as Hammer from 'hammerjs';

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
  @Input() image= '';
  @Input() title= '';
  @Input() excerpt= '';
  @Input() date= '';
  @Input() author= '';
  @Input() readMoreUrl= '';
  @Input() category= '';
  @Input() authorInitials= '';
  @Input() tag= '';
  @Input() showCategoryOverlay = true;
  @Input() totalPosts = 1; // Nueva entrada para saber cuántos posts hay en el tag
  @Input() currentIndex = 0; // Nueva entrada para el índice actual

  @Output() swipeEvent = new EventEmitter<'left' | 'right'>();

  isMobile = false;

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
        console.log('Swipe left detected');
        this.swipeEvent.emit('left');
      });

      hammer.on('swiperight', () => {
        console.log('Swipe right detected');
        this.swipeEvent.emit('right');
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

  // Métodos para los botones
  onPrevious() {
    this.swipeEvent.emit('right');
  }

  onNext() {
    this.swipeEvent.emit('left');
  }
}