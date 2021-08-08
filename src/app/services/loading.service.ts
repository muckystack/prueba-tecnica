import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  /** Representa el estado de la carga de datos */
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}
}
