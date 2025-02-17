import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from '@angel/features';
import { Router } from '@angular/router';



@Component({
  selector: 'app-pesca-layout',
  imports: [CommonModule, PostListComponent],
  templateUrl: './pesca-layout.component.html',
  styleUrl: './pesca-layout.component.scss',
})
export class PescaLayoutComponent {


    constructor(private router: Router) {}
  
    navigateToUpload() {
      this.router.navigate(['/upload-posts/pesca']);
    }
  
    
}
