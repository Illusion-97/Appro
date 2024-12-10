import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {map, switchMap} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  produits = inject(ActivatedRoute).data.pipe(map(({products}) => products))
  private http: HttpClient = inject(HttpClient)

  delete(id: any) {
    this.produits = this.http.delete("/products/"+id).pipe(switchMap(() => this.http.get("/products")))
  }
}
