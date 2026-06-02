import {Routes} from '@angular/router';

export const ecclesiology_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./ecclesiology')
      .then(m => m.Ecclesiology),
    title: 'Ecclesiology'
  }
]
