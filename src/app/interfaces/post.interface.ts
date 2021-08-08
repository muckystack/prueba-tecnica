import { UsuarioI } from "./usuario.interface";

export interface PostsI {
  userId: number;
  user: UsuarioI;
  id: number;
  title: string;
  body: string;
}
