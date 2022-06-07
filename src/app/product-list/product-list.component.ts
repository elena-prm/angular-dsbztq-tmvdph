import { Component } from '@angular/core';

import { peliculas } from '../products';
import { videojuegos } from '../products';
import { ebooks } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  peliculas = peliculas;
  videojuegos = videojuegos;
  ebooks = ebooks;

  share() {
    window.alert('The product has been shared!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
