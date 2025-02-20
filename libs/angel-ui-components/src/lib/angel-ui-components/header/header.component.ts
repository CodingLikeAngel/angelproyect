import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  constructor(private router: Router) {}

  navigateToUpload() {
    this.router.navigate(['/upload-posts']);
    this.isMobileMenuOpen = false;
  }

  navigateToPosts() {
    this.router.navigate(['/posts']);
    this.isMobileMenuOpen = false;
  }
}