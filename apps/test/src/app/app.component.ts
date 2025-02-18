
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule],
})
export class AppComponent  implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Realizamos una solicitud a la API para incrementar las visitas
    this.http.get('https://api-production-ec1c.up.railway.app/api/increment-visit').subscribe((response: any) => {
      console.log('Número de visitas:', response.count);
    });

    this.http.get('https://api-production-ec1c.up.railway.app/api/get-visit-count').subscribe((response: any) => {
      console.log('Número total de visitas:', response.count);
    });
  }

  generatedContent = '';
  // Implementación del componente

  handleGeneratedContent(content: string) {
    console.log('Contenido generado:', content);
    this.generatedContent = content;
  }

}
