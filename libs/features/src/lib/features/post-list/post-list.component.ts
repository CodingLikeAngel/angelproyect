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
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  @Input() tag = '';

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
      this.page = 1;
      this.loadPosts();
    });
  }

  loadPosts(): void {
    if (this.isLoading) return;
    this.isLoading = true;

    const loadMethod = this.tag
      ? this.postService.getPostsByTag(this.tag)
      : this.postService.getAllPosts();

    loadMethod.subscribe({
      next: (data) => {
        this.posts = this.tag ? data : [...this.posts, ...data]; // Acumula posts si no hay tag
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar los posts:', err);
        this.isLoading = false;
      },
    });
  }

  onScroll(): void {
    if (this.page < this.totalPages && !this.isLoading) {
      this.page++;
      this.loadPosts();
    }
  }
}