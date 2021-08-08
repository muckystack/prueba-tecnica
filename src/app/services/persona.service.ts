import { EventEmitter, Injectable } from '@angular/core';
import { PersonaI } from '../interfaces/persona.interface';
import { personas } from '../utils/personas.util';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  /** Representa una lista de objetos de tipo Persona */
  private listaPersonas: PersonaI[] = personas;

  /** Representa una evento que capta un objeto de tipo Persona para su edición */
  editarPersona: EventEmitter<PersonaI> = new EventEmitter<PersonaI>();

  constructor() {}

  /**
   * Representa una lista de personas
   * @returns Retorna una lista de personas
   */
  getPersonas(): PersonaI[] {
    return this.listaPersonas;
  }
}
