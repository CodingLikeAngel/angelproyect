import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-card-senderismo',
  imports:[CommonModule],
  templateUrl: './card-senderismo.component.html',
  styleUrls: ['./card-senderismo.component.scss'],
})
export class CardSenderismoComponent {
  @Input() routeName = '';
  @Input() imageUrl = '';
  @Input() difficulty = '';
  @Input() rating = 0;
  @Input() reviews = 0;
  @Input() duration = 0;
  @Input() distance = 0;
  @Input() ascent = 0;
  @Input() description = '';
  @Input() features: any[] = [];
  @Input() link = '';
}
