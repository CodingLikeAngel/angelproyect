import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
})
export class CardComponent implements OnChanges {
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

  ngOnChanges(changes: SimpleChanges): void {
    this.dynamicStyles = this.getColorForTag();
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
}