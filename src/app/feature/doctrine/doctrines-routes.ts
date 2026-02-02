import {Routes} from '@angular/router';

export const doctrines_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./doctrine')
      .then(m => m.Doctrine),
    title: 'doctrine'
  },
  {
    path: 'calvinism',
    loadChildren: () => import('./calvinism/calvinism-routes')
      .then(m => m.calvinism_routes),
    title: 'Calvinism'
  },
  {
    path: 'dispensation',
    loadChildren: () => import('./dispensation/dispensation-routes')
      .then(m => m.dispensation_routes),
    title: 'Dispensation'
  },
  {
    path: 'salvation',
    loadComponent: () => import('./salvation/salvation')
      .then(m => m.Salvation),
    title: 'Salvation'
  },
  {
    path: 'trinity',
    loadComponent: () => import('./trinity/trinity')
      .then(m => m.Trinity),
    title: 'Trinity'
  }
];
