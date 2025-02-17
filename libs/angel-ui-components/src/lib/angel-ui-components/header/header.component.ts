import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  constructor(private router: Router) {}

  navigateToUpload() {
    this.router.navigate(['/upload-posts']);
  }
}