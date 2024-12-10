import {ActivatedRouteSnapshot, Routes} from '@angular/router';
import {inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import('./views/list/list.component').then(m => m.ListComponent),
    resolve: {
      products: () => inject(HttpClient).get("/products")
    }
  },
  {
    path: ":id",
    loadComponent: () => import('./views/editor/editor.component').then(m => m.EditorComponent),
    resolve: {
      products: (route: ActivatedRouteSnapshot) => inject(HttpClient).get("/products/"+route.paramMap.get("id"))
    }
  }
]
