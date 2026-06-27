import {Route} from '@angular/router';

export const home_routes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./home')
      .then(m => m.Home),
    title: 'Home'
  },
  {
    path: 'context',
    loadComponent: () => import('./context/context')
      .then(m => m.Context),
    title: 'Context'
  },
  {
    path: 'interpretation',
    loadComponent: () => import('./interpretation/interpretation')
      .then(m => m.Interpretation),
    title: 'Interpretation'
  }
]
