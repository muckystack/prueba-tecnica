import { DireccionI } from './direccion.interface';

export interface PersonaI {
  id?: number;
  nombre: string;
  edad: number;
  frase: string;
  direccion?: DireccionI;
}
