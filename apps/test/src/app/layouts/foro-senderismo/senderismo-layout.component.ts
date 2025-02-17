import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PostListComponent } from '@angel/features';


@Component({
  selector: 'app-senderismo-layout',
  imports: [CommonModule, PostListComponent],
  templateUrl: './senderismo-layout.component.html',
  styleUrl: './senderismo-layout.component.scss',
})
export class SenderismoLayoutComponent {

    constructor(private router: Router) {}
  
    navigateToUpload() {
      this.router.navigate(['/upload-posts/senderismo']);
    }


}
