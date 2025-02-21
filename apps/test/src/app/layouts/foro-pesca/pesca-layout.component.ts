import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  CardNextAdventuresComponent,
  CaracteristicasComponent,
} from '@angel/angel-ui-components';


@Component({
  selector: 'app-pesca-layout',
  imports: [CommonModule , CardNextAdventuresComponent, CaracteristicasComponent],
  templateUrl: './pesca-layout.component.html',
  styleUrl: './pesca-layout.component.scss',
})
export class PescaLayoutComponent {


    constructor(private router: Router) {}
  
    navigateToUpload() {
      this.router.navigate(['/upload-posts/pesca']);
    }
  
    
}
