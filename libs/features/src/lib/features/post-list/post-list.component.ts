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
  }

  loadPosts(): void {
    if (this.isLoading) return;
    this.isLoading = true;

    const postId = '67b16cdfadccb5f5e1ee6e13'; // ID válido de tu documento
    this.postService.getPost(postId).subscribe({
      next: (data) => {
        this.posts = [data];
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
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
