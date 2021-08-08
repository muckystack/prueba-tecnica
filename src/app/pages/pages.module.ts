import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { EmpresaComponent } from './empresa/empresa.component';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PagesComponent, EmpresaComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComponentsModule,
    SharedModule,
    FontAwesomeModule,
  ],
})
export class PagesModule {}
