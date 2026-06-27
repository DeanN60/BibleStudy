import {Routes} from '@angular/router';

export const israelology_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./israelology')
      .then(m => m.Israelology),
    title: 'Israelology',
  },
  {
    path: 'never-give-up',
    loadComponent: () => import('./never-give-up/never-give-up')
      .then(m => m.NeverGiveUp),
    title: 'Never Give Up',
  }
]
