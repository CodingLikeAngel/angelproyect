import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { CardComponent } from '@angel/angel-ui-components';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'lib-post-list',
  standalone: true,
  imports : [CardComponent, CommonModule, NgOptimizedImage],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
 posts: any[] = [];
  page = 1;
  totalPages = 1;
  isLoading = false;

  constructor(private postService: PostService) {}

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

    this.postService.getAllPosts().subscribe({
      next: (data) => {
        this.posts = data; // Asigna la lista de posts obtenida
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar los posts:', err);
        this.isLoading = false;
      },
    });
  }

  onScroll(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadPosts();
    }
  }
}
