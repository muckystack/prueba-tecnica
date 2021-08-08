import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonaI } from 'src/app/interfaces/persona.interface';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarjeta-presentacion',
  templateUrl: './tarjeta-presentacion.component.html',
  styles: [],
})
export class TarjetaPresentacionComponent implements OnInit {
  /** Representa un objeto de tipo persona */
  @Input() persona: PersonaI = {
    edad: 0,
    frase: '',
    nombre: '',
    direccion: {
      id: 0,
      calle: '',
      colonia: '',
      pais: '',
    },
  };

  /** Representa un evento para informar la persona que se quiere eliminar */
  @Output() eliminarPersona: EventEmitter<PersonaI> = new EventEmitter<PersonaI>();

  constructor(private _personaService: PersonaService) {}

  ngOnInit(): void {}

  /**
   * Representa la edicaión de una persona
   * Se emite un evento con la persona que se quiere editar
   */
  editar() {
    this._personaService.editarPersona.emit(this.persona);
  }

  /**
   * Representa la eliminación de una persona
   * Emite un evento con la persona que se quiere eliminar
   */
  eliminar() {
    Swal.fire({
      title: '¿Seguro que quieres eliminar la información?',
      showCancelButton: true,
      confirmButtonText: `Eliminar`,
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminarPersona.emit(this.persona);
        Swal.fire('Eliminado!', '', 'success');
      }
    });
  }
}
