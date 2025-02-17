import { PostContentComponent, PostListComponent, UploadPostComponent } from '@angel/features';
import { Route } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout.component';
import { HomeComponent } from './home/home.component';


export const appRoutes: Route[] = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'posts', component: PostListComponent },
      { path: 'upload-posts', component: UploadPostComponent },
      // Otras rutas que usan el layout principal...
    ]
  },
  // Ruta para el detalle del post con un layout distinto
  { path: 'post/:id', component: PostContentComponent },
  { path: '**', redirectTo: '' }
];
