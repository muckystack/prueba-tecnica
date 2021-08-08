import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  /**
   * Representa una lista de posts
   * @returns Retorna un observable con las lista de posts
   */
  getPosts$(): Observable<any> {
    return this.http.get(`${environment.baseUrl}posts`);
  }

  /**
   * Representa una lista de usuarios
   * @returns Retorna un observable con una lista de usuarios
   */
  getUserpost$(): Observable<any> {
    return this.http.get(`${environment.baseUrl}users`);
  }

  /**
   * Representa el detalle de un posts
   * @returns Retorna un observable con el detalle de un post
   */
  getCommnetsByPostId$(id: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}posts/${id}/comments`);
  }
}
