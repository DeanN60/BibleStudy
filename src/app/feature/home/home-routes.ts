import {Route} from '@angular/router';

export const home_routes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./home')
      .then(m => m.Home),
    title: 'Home'
  },
  {
    path: 'interpretation',
    loadComponent: () => import('./interpretation/interpretation')
      .then(m => m.Interpretation),
    title: 'Interpretation'
  }
]
