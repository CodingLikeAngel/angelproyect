
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule],
})
export class AppComponent {
  generatedContent = '';
  // Implementación del componente

  handleGeneratedContent(content: string) {
    console.log('Contenido generado:', content);
    this.generatedContent = content;
  }

}
