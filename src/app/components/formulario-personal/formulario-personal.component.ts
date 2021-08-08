import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PersonaI } from 'src/app/interfaces/persona.interface';
import { PersonaService } from 'src/app/services/persona.service';
import { touchForm } from 'src/app/utils/forms.util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-personal',
  templateUrl: './formulario-personal.component.html',
  styles: [],
})
export class FormularioPersonalComponent implements OnInit {
  /** Representa el elemento formulario */
  @ViewChild('form') form: ElementRef | any;

  /** Representa el item que se editara */
  @Input() editarPersona: PersonaI | any;

  /** Representa un evento que retornara el nuevo registro */
  @Output() nuevaPersona: EventEmitter<PersonaI> = new EventEmitter<PersonaI>();

  /** Representa un eventoq ue retorna un true cuando se ha editado un registro */
  @Output() editada: EventEmitter<boolean> = new EventEmitter<boolean>();

  /** Representa objeto con las validaciones del formulario */
  formValidator: any;

  /** Representa bandera para cambiar las acciones del formulario */
  esEditar: boolean = false;

  /** Representa el objeto a editar que cargara los datos en la lista*/
  editaPersona: PersonaI = {
    edad: 0,
    frase: '',
    nombre: '',
  };

  constructor(private formBuilder: FormBuilder) {
    this.validations();
  }

  ngOnInit(): void {
    this.esPersonaAEditar();
  }

  /**
   * Vomprueba si se quiere editar o crear un nuevo registro
   */
  esPersonaAEditar() {
    if (this.editarPersona !== undefined) {
      this.formValidator.patchValue(this.editarPersona);
      this.editaPersona = this.editarPersona;
      this.esEditar = true;
    }
  }

  /**
   * Registra las validaciones del formulario
   */
  validations() {
    this.formValidator = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      edad: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(3),
          Validators.max(100),
          Validators.pattern(/^([0-9])*$/),
        ],
      ],
      frase: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  /**
   * Representa el guardado de información del formulario
   * Se emite un valor que representa el nuevo registro
   */
  guardar() {
    touchForm(this.formValidator);

    if (this.formValidator.valid) {
      this.nuevaPersona.emit({
        edad: this.formValidator.value.edad,
        frase: this.formValidator.value.frase,
        nombre: this.formValidator.value.nombre,
      });

      this.form.nativeElement.reset();
    }
  }

  /**
   * Representa la edición de un registro
   * Se emite una bandera para actualizar el estado del modal
   */
  editar() {
    Swal.fire({
      title: '¿Seguro que quieres editar la información?',
      showCancelButton: true,
      confirmButtonText: `Editar`,
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.editaPersona.edad = this.formValidator.value.edad;
        this.editaPersona.frase = this.formValidator.value.frase;
        this.editaPersona.nombre = this.formValidator.value.nombre;

        this.form.nativeElement.reset();

        this.editada.emit(true);

        this.esEditar = false;

        Swal.fire('¡Guardado!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('No se pudieron guardar los cambios', '', 'info');
      }
    });
  }

  /**
   * Representa la canselación del formulario
   * Se emite una bandera para actualizar el estado del modal
   */
  cancelar() {
    this.esEditar = false;
    this.editada.emit(true);
  }
}
