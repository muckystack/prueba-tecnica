import { Component, OnInit } from '@angular/core';
import { PostsI } from 'src/app/interfaces/post.interface';
import { UsuarioI } from 'src/app/interfaces/usuario.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: [],
})
export class PostsComponent implements OnInit {
  /** Representa una lista de posts */
  listaPosts: PostsI[] = [];

  /** Representa una lista de usuarios */
  usuarios: UsuarioI[] = [];

  constructor(private _postsService: PostsService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  /**
   * Representa la recuperación de usuarios
   */
  getUsuarios() {
    this._postsService.getUserpost$().subscribe((response: UsuarioI[]) => {
      this.usuarios = response;
      this.getPosts();
    });
  }

  /**
   * Representa la recuperacion de la lista de posts
   */
  getPosts() {
    this._postsService.getPosts$().subscribe((response: PostsI[]) => {
      this.listaPosts = response;

      this.listaPosts.map((item: PostsI) => {
        this.usuarios.forEach((usuario: UsuarioI) => {
          if (item.userId === usuario.id) {
            item.user = usuario;
          }
        });
      });
    });
  }
}
