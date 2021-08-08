import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { EmpresaComponent } from './empresa/empresa.component';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostsComponent } from './posts/posts.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

@NgModule({
  declarations: [PagesComponent, EmpresaComponent, PostsComponent, ComentariosComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComponentsModule,
    SharedModule,
    FontAwesomeModule,
  ],
})
export class PagesModule {}
