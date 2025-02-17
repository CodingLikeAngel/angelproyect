import { Component, Input, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { CardComponent } from '@angel/angel-ui-components';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-post-list',
  standalone: true,
  imports: [CardComponent, CommonModule, NgOptimizedImage],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() tag = ''; // El tag se pasa desde el componente padre

  posts: any[] = [];
  page = 1;
  totalPages = 1;
  isLoading = false;

  constructor(private postService: PostService, private router: Router) {}

  navigateToUpload() {
    this.router.navigate(['/upload-posts']);
  }

  ngOnInit(): void {
    this.loadPosts();
    this.setupPostCreationListener();
  }

  private setupPostCreationListener(): void {
    this.postService.postCreated$.subscribe(() => {
      this.page = 1; // Reinicia la paginación si es necesario
      this.loadPosts();
    });
  }

  loadPosts(): void {
    if (this.isLoading) return;
    this.isLoading = true;
  
    // Si el tag no está vacío, carga los posts por tag
    if (this.tag) {
      this.postService.getPostsByTag(this.tag).subscribe({
        next: (data) => {
          this.posts = data; // Asigna la lista de posts obtenida
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error al cargar los posts por tag:', err);
          this.isLoading = false;
        },
      });
    } else {
      // Si el tag está vacío, carga todos los posts
      this.postService.getAllPosts().subscribe({
        next: (data) => {
          this.posts = data; // Asigna la lista de posts obtenida
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error al cargar todos los posts:', err);
          this.isLoading = false;
        },
      });
    }
  }
  

  onScroll(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadPosts();
    }
  }
}
