import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CardNextAdventuresComponent, CaracteristicasComponent } from '@angel/angel-ui-components';


@Component({
  selector: 'app-recetas-layout',
   imports: [CommonModule , CardNextAdventuresComponent, CaracteristicasComponent],
  templateUrl: './recetas-layout.component.html',
  styleUrl: './recetas-layout.component.scss',
})
export class RecetasLayoutComponent {


  constructor(private router: Router) {}

  navigateToUpload() {
    this.router.navigate(['/upload-posts/gastronomia']);
  }


}
