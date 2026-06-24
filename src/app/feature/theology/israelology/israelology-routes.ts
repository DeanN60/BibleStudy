import {Routes} from '@angular/router';

export const israelology_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./israelology')
      .then(m => m.Israelology),
    title: 'Israelology',
  }
]
