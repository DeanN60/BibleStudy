import {Routes} from '@angular/router';

export const jesus_routes: Routes = [
  {
    path: "",
    loadComponent: () => import('./jesus')
      .then(m => m.Jesus),
    title: "Jesus"
  },
  {
    path: "incarnate",
    loadComponent: () => import('./incarnate/incarnate')
      .then(m => m.Incarnate),
    title: "Incarnate"
  },
  {
    path: "ministry",
    loadComponent: () => import('./ministry/ministry')
      .then(m => m.Ministry),
    title: "Ministry"
  }
]
