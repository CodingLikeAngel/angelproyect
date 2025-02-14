import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from './../../../../environments/environment'
import { InputComponent } from './../../../../../../angel-ui-components/src/lib/angel-ui-components/input/input.component';
import { ButtonComponent } from './../../../../../../angel-ui-components/src/lib/angel-ui-components/button/button.component';


@Component({
  selector: 'lib-post-title',
  standalone: true,
  imports: [CommonModule, FormsModule, InputComponent, ButtonComponent ],
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.scss']
})
export class PostTitleComponent implements OnInit {
  @Input() title = '';
  isEditable = !environment.useApiForTitle;
  pasoActual: number = 1;
  mostrarBienvenida: boolean = true;
  // Lógica para obtener el título de la API en producción
  ngOnInit() {
    if (environment.useApiForTitle) {
      // Llama al servicio para obtener el título de la API
      // this.title = this.apiService.getTitle();
    }
  }

  guardarTitulo() {
    if (this.title.trim()) {
      this.isEditable = false;
      this.mostrarBienvenida = false;
      // Lógica adicional para el siguiente paso
    } else {
      alert('El título no puede estar vacío.');
    }
  }
  }



