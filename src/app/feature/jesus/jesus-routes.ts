import {Routes} from '@angular/router';

export const jesus_routes: Routes = [
  {
    path: "",
    loadComponent: () => import('./jesus')
      .then(m => m.Jesus),
    title: "Jesus"
  },
  {
    path: "deity",
    loadComponent: () => import('./deity/deity')
      .then(m => m.Deity),
    title: "Deity of Christ"
  },
  {
    path: "incarnate",
    loadComponent: () => import('./incarnate/incarnate')
      .then(m => m.Incarnate),
    title: "Incarnate"
  },
  {
    path: "ministry",
    loadChildren: () => import('./ministry/ministry-routes')
      .then(m => m.ministry_routes),
    title: "Ministry"
  },
  {
    path: 'disciples',
    loadChildren: () => import('./disciples/disciples-routes')
      .then(m => m.disciples_routes),
    title: 'Disciples'
  }
]
