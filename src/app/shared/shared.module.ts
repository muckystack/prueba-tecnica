import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [ErrorMsgComponent, LoadingComponent],
  imports: [CommonModule],
  exports: [ErrorMsgComponent, LoadingComponent],
})
export class SharedModule {}
