import {Routes} from '@angular/router';

export const theology_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./theology')
      .then(m => m.Theology),
    title: 'Theology',
  },
  {
    path: 'dispensation',
    loadChildren: () => import('./dispensation/dispensation-routes')
      .then(m => m.dispensation_routes),
    title: 'Dispensation',
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
  },
  {
    path: 'israelology',
    loadChildren: () => import('./israelology/israelology-routes')
      .then(m => m.israelology_routes),
    title: 'Israelology',
  },
  {
    path: 'five-solas',
    loadComponent: () => import('./five-solas/five-solas')
      .then(m => m.FiveSolas),
    title: 'Five Solas',
  },
  {
    path: 'rapture',
    loadChildren: () => import('./rapture/rapture-routes')
      .then(m => m.rapture_routes),
    title: 'Rapture',
  },
  {
    path: 'second-coming',
    loadChildren: () => import('./second-coming/second-coming-routes')
      .then(m => m.second_coming_routes),
    title: 'Second Coming',
  }
]
