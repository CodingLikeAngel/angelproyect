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
  postsByTag: Map<string, { posts: any[]; currentIndex: number }> = new Map(); // Almacena posts y índice actual por tag
  isLoading = false;
  isMobile = false;
  currentVisibleIndex = 0; // Índice del card visible en móvil


  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.loadPosts();
    this.setupPostCreationListener();
  }
  

  private setupPostCreationListener(): void {
    this.postService.postCreated$.subscribe(() => {
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
        this.processPosts(data);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar los posts:', err);
        this.isLoading = false;
      },
    });
  }

  private processPosts(posts: any[]): void {
    if (this.tag) {
      // Si hay un tag específico, almacenamos todos los posts de ese tag
      this.postsByTag.set(this.tag, { posts, currentIndex: 0 });
      return;
    }

    // Si no hay tag, agrupamos todos los posts por tag
    posts.forEach(post => {
      if (post.tag) {
        if (!this.postsByTag.has(post.tag)) {
          this.postsByTag.set(post.tag, { posts: [], currentIndex: 0 });
        }
        this.postsByTag.get(post.tag)!.posts.push(post);
      }
    });
  }

  // Convertimos el Map a array para el template, mostrando el post actual de cada tag
  get postsArray(): any[] {
    return Array.from(this.postsByTag.entries()).map(([tag, { posts, currentIndex }]) => {
      return posts[currentIndex] || {};
    });
  }

  // Manejar el evento de swipe desde el card
  onSwipe(tag: string, direction: 'left' | 'right') {
    const tagData = this.postsByTag.get(tag);
    if (!tagData) return;

    const { posts, currentIndex } = tagData;
    let newIndex = currentIndex;

    if (direction === 'left' && currentIndex < posts.length - 1) {
      newIndex = currentIndex + 1;
    } else if (direction === 'right' && currentIndex > 0) {
      newIndex = currentIndex - 1;
    }

    if (newIndex !== currentIndex) {
      this.postsByTag.set(tag, { posts, currentIndex: newIndex });
    }
  }
}