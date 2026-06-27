import {Routes} from '@angular/router';

export const ministry_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./ministry')
      .then(m => m.Ministry),
    title: 'Ministry'
  },
  {
    path: 'healing',
    loadComponent: () => import('./healing/healing')
      .then(m => m.Healing),
    title: 'Healing'
  },
  {
    path: 'teaching',
    loadComponent: () => import('./teaching/teaching')
      .then(m => m.Teaching),
    title: 'Teaching'
  }
]
