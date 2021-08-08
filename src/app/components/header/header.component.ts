import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  /** Representa las pestañas del menú */
  navbar = [
    { title: 'Personas', link: '/app/personas' },
    // { title: 'Post', link: '/app/post' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
