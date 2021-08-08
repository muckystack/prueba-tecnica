import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpresaComponent } from './empresa/empresa.component';
import { PostsComponent } from './posts/posts.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
