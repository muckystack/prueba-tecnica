import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';
import { FormularioPersonalComponent } from '../components/formulario-personal/formulario-personal.component';
import { PagesComponent } from './pages.component';
import { PostsComponent } from './posts/posts.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

const routes: Routes = [
  {
    path: 'app',
    component: PagesComponent,
    children: [
      {
        path: 'personas',
        component: EmpresaComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'posts/:id/comments',
        component: ComentariosComponent,
      },
      { path: '', redirectTo: 'personas', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
