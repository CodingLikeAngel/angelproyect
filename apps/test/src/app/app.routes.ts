import { PostContentComponent, PostListComponent, UploadPostComponent } from '@angel/features';
import { Route } from '@angular/router';
import { MainLayoutComponent } from './layouts/main/main-layout.component';
import { HomeComponent } from './layouts/main/home/home.component';
import { PescaLayoutComponent } from './layouts/foro-pesca/pesca-layout.component';
import { MicoLayoutComponent } from './layouts/foro-mocologico/mico-layout.component';
import { RecetasLayoutComponent } from './layouts/foro-recetas/recetas-layout.component';
import { SenderismoLayoutComponent } from './layouts/foro-senderismo/senderismo-layout.component';
import { ForoMainLayoutComponent } from './layouts/foro/foro-main-layout.component';
import { RutasComponent } from './layouts/foro-senderismo/rutas/rutas.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'posts', component: PostListComponent },
      { path: 'upload-posts', component: UploadPostComponent },
      { path: 'upload-posts/:tag', component: UploadPostComponent },
      { path: 'post/:id', component: PostContentComponent },
      { path: 'home', component: HomeComponent },
      // Otras rutas con layout principal...
    ]
  },
  {
    path: 'foro-main',
    component: ForoMainLayoutComponent,
    children: [
      {
        path: 'foro-senderismo',
        // Esta ruta carga el componente con el HTML completo que mostraste
        component: SenderismoLayoutComponent 
      },
      {
        path: 'foro-senderismo/rutas',
        // Esta ruta carga otro componente con HTML completamente diferente
        component: RutasComponent 
      },
      {
        path: 'foro-pesca',
        component: PescaLayoutComponent
      },
      {
        path: 'foro-micologico',
        component: MicoLayoutComponent
      },
      {
        path: 'foro-gastronomico',
        component: RecetasLayoutComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
