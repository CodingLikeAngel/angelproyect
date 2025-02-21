import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  CardNextAdventuresComponent,
  CaracteristicasComponent,
} from '@angel/angel-ui-components';


@Component({
  selector: 'app-mico-layout',
  imports: [CommonModule , CardNextAdventuresComponent, CaracteristicasComponent],
  templateUrl: './mico-layout.component.html',
  styleUrl: './mico-layout.component.scss',
})
export class MicoLayoutComponent {

  constructor(private router: Router) {}

  navigateToUpload() {
    this.router.navigate(['/upload-posts/micologia']);
  }

}
