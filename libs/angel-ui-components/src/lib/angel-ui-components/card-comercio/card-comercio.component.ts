import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-card-comercio',
  templateUrl: './card-comercio.component.html',
  styleUrls: ['./card-comercio.component.scss']
})
export class CardComercioComponent {
  @Input() nombre= '';
  @Input() imagen= '';
  @Input() descripcion= '';
  @Input() direccion= '';
  @Input() link= '';
}
