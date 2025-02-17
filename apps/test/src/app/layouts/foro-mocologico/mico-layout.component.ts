import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PostListComponent } from '@angel/features';

@Component({
  selector: 'app-mico-layout',
  imports: [CommonModule , PostListComponent],
  templateUrl: './mico-layout.component.html',
  styleUrl: './mico-layout.component.scss',
})
export class MicoLayoutComponent {

  constructor(private router: Router) {}

  navigateToUpload() {
    this.router.navigate(['/upload-posts/micologia']);
  }

}
