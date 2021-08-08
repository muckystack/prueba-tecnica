import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentarioI } from 'src/app/interfaces/comentario.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styles: [],
})
export class ComentariosComponent implements OnInit {
  /** Representa una lista de comentarios */
  comentarios: ComentarioI[] = [];

  constructor(
    private activatedRouter: ActivatedRoute,
    private _postsService: PostsService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params.id;
    this.getComentarios(id);
  }

  /**
   * Representa la obtención de los comentarios de un post
   * @param id Identificador del post
   */
  getComentarios(id: any) {
    this._postsService
      .getCommnetsByPostId$(id)
      .subscribe((response: ComentarioI[]) => {
        this.comentarios = response;
      });
  }
}
