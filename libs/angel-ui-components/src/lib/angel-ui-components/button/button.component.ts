import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowPath } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [NgIf, NgIconComponent, CommonModule ],
  viewProviders: [provideIcons({ heroArrowPath })],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  // Añade valores por defecto a todos los inputs
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() iconLeft?: string = '';
  @Input() iconRight?: string = '';
  @Output() clicked = new EventEmitter<Event>();
  
  // Método existente...


  handleClick(event: Event) {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }


  get buttonClasses(): string {
    return [
      'btn',
      `btn-${this.variant}`,
      `btn-${this.size}`,
      this.loading ? 'btn-loading' : '',
      (this.disabled || this.loading) ? 'btn-disabled' : ''
    ].join(' ');
  }
}
