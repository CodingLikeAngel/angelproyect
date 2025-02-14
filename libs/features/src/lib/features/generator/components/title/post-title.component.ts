import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { InputComponent } from '../../../../../../../angel-ui-components/src/lib/angel-ui-components/input/input.component';
import { ButtonComponent } from '../../../../../../../angel-ui-components/src/lib/angel-ui-components/button/button.component';

@Component({
  selector: 'lib-post-title',
  standalone: true,
  imports: [CommonModule, FormsModule, InputComponent, ButtonComponent],
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.scss']
})
export class PostTitleComponent implements OnInit {
  @Input() title = '';
  @Output() pasoCompletado = new EventEmitter<void>(); // Agregar el Output
  isEditable = !environment.useApiForTitle;
  pasoActual = 1;
  mostrarBienvenida = true;

  ngOnInit() {
    if (environment.useApiForTitle) {
      // Aquí puedes hacer la llamada a la API para obtener el título si es necesario
      // this.title = this.apiService.getTitle();
    }
  }

  guardarTitulo() {
    if (this.title.trim()) {
      this.isEditable = false;
      this.mostrarBienvenida = false;
      this.pasoActual = 2; // Avanza al siguiente paso
    } else {
      alert('El título no puede estar vacío.');
    }
  }

  siguientePaso() {
    if (this.pasoActual === 2) {
      // Lógica para avanzar a otros pasos
      alert('¡Listo! El título ha sido guardado.');
      this.pasoActual = 3;
      this.pasoCompletado.emit(); // Emite el evento cuando termines el paso 3
    }
  }
}
