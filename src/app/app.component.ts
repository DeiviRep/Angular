import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './model/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Primera app';
  http = inject(HttpClient);
  products: Product[] = [];

  changeTitle() {
    this.title = 'accion';
  }
}
