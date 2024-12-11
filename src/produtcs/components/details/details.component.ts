import {Component, Input} from '@angular/core';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    DecimalPipe
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input({required: true}) product!: Product


  get stars() {
    return new Array(5)
      .fill(0)
      .map((v, i) => (i + 1) <= this.product.rating );
  }
}

export interface Product {
  id: number
  name: string
  src: string
  rating: number
  price: number
}
