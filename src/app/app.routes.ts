import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("../common/views/home/home.component").then(m => m.HomeComponent)
  }
];
