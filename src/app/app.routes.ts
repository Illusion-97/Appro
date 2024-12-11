import { Routes } from '@angular/router';
import {inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("../common/views/home/home.component").then(m => m.HomeComponent),
    resolve: {
      products: () => inject(HttpClient).get("/products")
    }
  },
  {
    path: "products",
    loadChildren: () => import('../produtcs/products.routes').then(m => m.routes)
  }
];
