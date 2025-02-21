import { Component, inject, OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { UploadPostService } from './upload-post.service';

import { ContentGeneratorComponent } from '@angel/angel-ui-components';
import { firstValueFrom, Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from '../post-list/post.service';

// Validador personalizado para longitud máxima
function maxLengthValidator(maxLength: number) {
  return (control: AbstractControl) => {
    const value = control.value || '';
    return value.length > maxLength ? { maxLength: { max: maxLength, actual: value.length } } : null;
  };
}

// Validador personalizado para verificar que se haya seleccionado al menos un archivo
function requiredFile(control: AbstractControl) {
  const value = control.value;
  return (!value || (value instanceof FileList && value.length === 0)) ? { required: true } : null;
}

// Validador personalizado para verificar que se haya seleccionado al menos un tag
function requiredTags(control: AbstractControl) {
  const value = control.value;
  return (!value || (Array.isArray(value) && value.length === 0)) ? { required: true } : null;
}

@Component({
  selector: 'lib-upload-post',
  standalone: true,
  imports: [ReactiveFormsModule, ContentGeneratorComponent, CommonModule],
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.scss'],
})
export class UploadPostComponent implements OnInit, AfterViewInit {
  postForm: FormGroup;
  generatedContent = '';
  isLoading = false;
  submissionSuccess = false;
  imagePreviews: string[] = [];
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  tag$!: Observable<string>;
  showTagInput = false;
  private tagValue = '';

  @ViewChildren('formInput') formInputs!: QueryList<ElementRef>;

  constructor(
    private fb: FormBuilder,
    private uploadPostService: UploadPostService,
    private postService: PostService
  ) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, maxLengthValidator(100)]],
      content: ['', Validators.required],
      author: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagenes: [null, requiredFile],
      tags: ['', requiredTags],
    });
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const postTag = params.get('tag');
          this.showTagInput = !postTag;
          this.tagValue = postTag || '';
          this.tag$ = new Observable<string>((observer) => {
            observer.next(postTag || '');
            observer.complete();
          });
          return this.tag$;
        })
      )
      .subscribe();
  }

  ngAfterViewInit() {
    this.formInputs.changes.subscribe(() => {
      this.scrollToFirstInvalidField();
    });
  }

  handleGeneratedContent(content: string) {
    console.log('Contenido generado:', content);
    this.generatedContent = content;
    this.postForm.patchValue({ content: content });
  }

  async onSubmit() {
    this.postForm.markAllAsTouched();
    Object.values(this.postForm.controls).forEach(control => control.updateValueAndValidity());

    if (this.postForm.valid) {
      this.isLoading = true;
      this.submissionSuccess = false;

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

      const tags = this.postForm.get('tags')?.value;
      if (tags && Array.isArray(tags)) {
        formData.append('tags', tags.join(','));
      }

      try {
        const tagValue = await firstValueFrom(this.tag$);
        formData.append('tag', tagValue);
        const response = await firstValueFrom(this.uploadPostService.createPost(formData));
        console.log('Post creado con éxito', response);
        this.postService.notifyPostCreated();
        this.submissionSuccess = true;
        setTimeout(() => {
          this.router.navigate([`#/foro-main/foro-${this.tagValue}`]);
        }, 1000);
      } catch (error) {
        console.error('Error al crear el post', error);
      } finally {
        this.isLoading = false;
      }
    } else {
      this.scrollToFirstInvalidField();
    }
  }

  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.postForm.patchValue({ imagenes: fileList });
      this.postForm.get('imagenes')?.updateValueAndValidity();
      this.imagePreviews = [];
      for (let i = 0; i < fileList.length; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagePreviews.push(e.target.result);
        };
        reader.readAsDataURL(fileList[i]);
      }
    } else {
      this.postForm.patchValue({ imagenes: null });
      this.imagePreviews = [];
    }
  }

  getRequiredInvalidFields(): string[] {
    const invalidFields: string[] = [];
    const fieldNames: { [key: string]: string } = {
      title: 'Título',
      content: 'Contenido',
      author: 'Autor',
      descripcion: 'Descripción',
      imagenes: 'Imágenes',
      tags: 'Categorías'
    };

    for (const key in this.postForm.controls) {
      const control = this.postForm.get(key);
      if (control?.invalid) {
        if (control.errors?.['required']) {
          invalidFields.push(fieldNames[key]);
        } else if (control.errors?.['maxLength']) {
          invalidFields.push(`${fieldNames[key]} (máx. 100 caracteres)`);
        }
      }
    }
    return invalidFields;
  }

  private scrollToFirstInvalidField() {
    const firstInvalidControlKey = Object.keys(this.postForm.controls).find(
      key => this.postForm.get(key)?.invalid
    );
    if (firstInvalidControlKey) {
      const inputElement = this.formInputs.find(
        input => input.nativeElement.id === firstInvalidControlKey || input.nativeElement.id === `${firstInvalidControlKey}-container`
      );
      if (inputElement) {
        setTimeout(() => {
          inputElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          inputElement.nativeElement.focus();
        }, 0);
      }
    }
  }
}