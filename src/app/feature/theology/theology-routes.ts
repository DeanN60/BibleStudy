import {Routes} from '@angular/router';

export const theology_routes: Routes = [
  {
    path:  '',
    loadComponent: () => import('./theology')
      .then(m => m.Theology),
    title: 'Theology',
  },
  {
    path: 'ecclesiology',
    loadChildren: () => import('./ecclesiology/ecclesiology-routes')
      .then(m => m.ecclesiology_routes),
    title: 'Ecclesiology',
  },
  {
    path: 'eschatology',
    loadChildren: () => import('./eschatology/eschatology-routes')
      .then(m => m.eschatology_routes),
    title: 'Eschatology',
  }
]
