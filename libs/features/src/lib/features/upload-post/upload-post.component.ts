// upload-post.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UploadPostService } from './upload-post.service';
import { PostService } from '@angel/features';
import { ContentGeneratorComponent } from '@angel/angel-ui-components';

@Component({
  selector: 'lib-upload-post',
  imports: [ReactiveFormsModule , ContentGeneratorComponent],
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.scss']
})
export class UploadPostComponent {
  postForm: FormGroup;
  generatedContent = '';

  constructor(private fb: FormBuilder, private uploadPostService: UploadPostService , private postService:  PostService) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagenes: [null]
    });
  }


  
  handleGeneratedContent(content: string) {
    console.log('Contenido generado:', content);
    this.generatedContent = content;
  }


  onSubmit() {
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
      this.uploadPostService.createPost(formData).subscribe(response => {
        console.log('Post creado con éxito', response);
        this.postService.notifyPostCreated(); 
      }, error => {
        console.error('Error al crear el post', error);
      });
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
