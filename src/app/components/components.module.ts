import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { TarjetaPresentacionComponent } from './tarjeta-presentacion/tarjeta-presentacion.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioPersonalComponent } from './formulario-personal/formulario-personal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    TarjetaPresentacionComponent,
    FooterComponent,
    FormularioPersonalComponent,
  ],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule, SharedModule],
  exports: [
    HeaderComponent,
    TarjetaPresentacionComponent,
    FooterComponent,
    FormularioPersonalComponent,
  ],
})
export class ComponentsModule {}
