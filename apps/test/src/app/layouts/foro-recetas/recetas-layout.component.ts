import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PostListComponent } from '@angel/features';


@Component({
  selector: 'app-recetas-layout',
  imports: [CommonModule, PostListComponent],
  templateUrl: './recetas-layout.component.html',
  styleUrl: './recetas-layout.component.scss',
})
export class RecetasLayoutComponent {


  constructor(private router: Router) {}

  navigateToUpload() {
    this.router.navigate(['/upload-posts/gastronomia']);
  }


}
