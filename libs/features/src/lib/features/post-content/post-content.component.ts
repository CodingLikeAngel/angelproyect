import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PostService } from '@angel/features';
import { Post } from 'libs/features/src/models/post.model';

@Component({
  selector: 'lib-post-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss'],
})
export class PostContentComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private postService = inject(PostService);

  post$!: Observable<Post>;

  ngOnInit(): void {
    // Se obtiene el parámetro "id" de la URL y se consulta el servicio
    this.post$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const postId = params.get('id');
        if (postId) {
          return this.postService.getPostById(postId);
        } else {
          return throwError(() => new Error('No se proporcionó el ID del post'));
        }
      })
    );
  }
}
