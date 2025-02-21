import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToPosts() {
    this.router.navigate(['/posts']);
  }

  navigateToUpload() {
    this.router.navigate(['/upload-posts']);
  }

  navigateToSocial() {
    // Futura funcionalidad: enlace a redes sociales
    window.open('https://twitter.com/leon2030', '_blank');
  }
}