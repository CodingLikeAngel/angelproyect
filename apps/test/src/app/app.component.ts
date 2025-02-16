import { ChatComponent, FooterComponent, HeaderComponent ,  ContentGeneratorComponent , UploadPostComponent} from '@angel/angel-ui-components';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostListComponent } from '@angel/features';
// import { ContentGeneratorComponent } from './../../../../libs/angel-ui-components/src/lib/angel-ui-components/content-generator/content-generator.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, FooterComponent, HeaderComponent, ChatComponent , PostListComponent, ContentGeneratorComponent, UploadPostComponent],
})
export class AppComponent {
  generatedContent = '';
  // Implementación del componente

  handleGeneratedContent(content: string) {
    console.log('Contenido generado:', content);
    this.generatedContent = content;
  }

}
