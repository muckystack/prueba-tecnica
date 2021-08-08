import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PersonaI } from 'src/app/interfaces/persona.interface';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Observer, Subscription } from 'rxjs';
@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css'],
})
export class EmpresaComponent implements OnInit, OnDestroy {
  /** Representa un icono */
  faPlus = faPlus;

  /** Representa la lista completa de personas */
  listaPersonas: PersonaI[] = [];

  /** Representa el objeto de modal */
  @ViewChild('content') content: ElementRef | any;

  /** Representa bandera del modal*/
  closeResult = '';

  /** Representa un onjeto persona que sera editado */
  editarPersona: PersonaI | any;

  /** Representa objetos de tipo observer */
  listaObserver: Subscription[] = [];

  constructor(
    private _personaService: PersonaService,
    private modalService: NgbModal
  ) {
    this.listaPersonas = this._personaService.getPersonas();
  }

  ngOnDestroy(): void {
    this.listaObserver.forEach((element) => {
      element.unsubscribe();
    });
  }

  ngOnInit(): void {
    this.obtenerPersonaEditada();
  }

  /**
   * Representa la persona que se quiere pasar al modal para editar
   */
  obtenerPersonaEditada() {
    const _sub = this._personaService.editarPersona.subscribe(
      (data: PersonaI) => {
        this.editarPersona = data;
        this.modalService.open(this.content);
      }
    );
    this.listaObserver.push(_sub);
  }

  /**
   * Representa el guardado de un nuevo registro
   * @param event Representa un objeto de persona
   * @param modal Representa el objeto de modal
   */
  nuevo(event: PersonaI, modal: any) {
    this.listaPersonas.unshift(event);
    modal.close('Save click');
    Swal.fire('¡Guardado!', '', 'success');
  }

  /**
   * Representa la eliminacion de una item de tipo persona
   * @param event Representa un objeto de tipo persona
   */
  eliminar(event: PersonaI) {
    this.listaPersonas = this.listaPersonas.filter(
      (item: PersonaI) => item.id !== event.id
    );
  }

  /**
   * Representa el despliegue del modal
   * @param content Representa el objeto de tipo modal
   */
  open(content: any) {
    this.editarPersona = undefined;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  /**
   * Representa el cerrado del modal
   * @param reason Representa un string con mensaje
   * @returns Retorna un string
   */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
