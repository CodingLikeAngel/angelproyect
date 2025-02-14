import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './../../../../libs/angel-ui-components/src/lib/angel-ui-components/header/header.component';
import { FooterComponent } from './../../../../libs/angel-ui-components/src/lib/angel-ui-components/footer/footer.component';
import { ChatComponent } from './../../../../libs/angel-ui-components/src/lib/angel-ui-components/chat/chat.component';
import { ContentGeneratorComponent } from './../../../../libs/angel-ui-components/src/lib/angel-ui-components/content-generator/content-generator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, FooterComponent, HeaderComponent, ChatComponent, ContentGeneratorComponent ],
})
export class AppComponent {
  // Implementación del componente
}
