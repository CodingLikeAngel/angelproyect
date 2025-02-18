// upload-post.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UploadPostService } from './upload-post.service';
import { PostService } from '@angel/features';
import { ContentGeneratorComponent } from '@angel/angel-ui-components';
import { firstValueFrom, Observable, switchMap, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-upload-post',
  standalone: true,
  imports: [ReactiveFormsModule , ContentGeneratorComponent, CommonModule],
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.scss']
})
export class UploadPostComponent implements OnInit {
  postForm: FormGroup;
  generatedContent = '';
  private route = inject(ActivatedRoute);
  tag$!: Observable<string>;
  showTagInput = false; // Nueva variable para controlar la visibilidad


  constructor(private fb: FormBuilder, private uploadPostService: UploadPostService , private postService:  PostService) {

    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagenes: [null],
      tags: [''] // Añadir este nuevo control
    });
  }
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params) => {
        const postTag = params.get('tag');
  
        // Mostrar input de tags solo si el tag está vacío o no existe
        this.showTagInput = !postTag; 
  
        // Asignar el valor de 'tag$' correctamente
        if (postTag) {
          this.tag$ = new Observable<string>((observer) => {
            observer.next(postTag);  // Emitir el valor del tag recibido de la ruta
            observer.complete();
          });
        } else {
          this.tag$ = new Observable<string>((observer) => {
            observer.next('');  // Si no hay tag, emitir una cadena vacía
            observer.complete();
          });
        }
        return this.tag$;
      })
    ).subscribe();  // Se asegura que el Observable tag$ esté correctamente asignado
  }
  


  handleGeneratedContent(content: string) {
    console.log('Contenido generado:', content);
    this.generatedContent = content;
  }

  async onSubmit() {
    if (this.postForm.valid) {
      const formData = new FormData();
      formData.append('title', this.postForm.get('title')?.value);
      formData.append('content', this.postForm.get('content')?.value);
      formData.append('author', this.postForm.get('author')?.value);
      formData.append('descripcion', this.postForm.get('descripcion')?.value);
  
      const imagenes = this.postForm.get('imagenes')?.value;
      if (imagenes) {
        for (let i = 0; i < imagenes.length; i++) {
          formData.append('imagenes', imagenes[i]);
        }
      }
  
      try {
        const tagValue = await firstValueFrom(this.tag$);  // Obtener el valor del Observable
        formData.append('tag', tagValue);
  
        // Usar async/await con la creación del post
        const response = await firstValueFrom(this.uploadPostService.createPost(formData)); // Convertir Observable a promesa
  
        console.log('Post creado con éxito', response);
        this.postService.notifyPostCreated();
      } catch (error) {
        console.error('Error al crear el post', error);
      }
    }
  }
  
  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.postForm.patchValue({
        imagenes: fileList
      });
    }
  }
}
