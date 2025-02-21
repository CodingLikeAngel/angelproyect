import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  constructor(private router: Router) {}

  toggleMobileMenu(event: Event) {
    event.stopPropagation(); // Evita propagación al padre
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  navigateHome(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/']);
  }

  navigate(event: Event, path: string) {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate([path]);
  }

  navigateAndClose(event: Event, path: string) {
    event.preventDefault();
    event.stopPropagation();
    this.isMobileMenuOpen = false;
    this.router.navigate([path]);
  }

  navigateToUpload() {
    this.isMobileMenuOpen = false;
    this.router.navigate(['/upload-posts']);
  }

  navigateToPosts() {
    this.isMobileMenuOpen = false;
    this.router.navigate(['/posts']);
  }
}