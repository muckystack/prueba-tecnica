import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styles: [],
})
export class ErrorMsgComponent implements OnInit {
  /** Representa un arreglo con los errores del formulario */
  @Input() error: any = [];

  constructor() {}

  ngOnInit(): void {}
}
