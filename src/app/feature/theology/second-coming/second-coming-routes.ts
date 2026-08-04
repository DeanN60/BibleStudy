import {Routes} from '@angular/router';

export const second_coming_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./second-coming')
      .then(m => m.SecondComing),
    title: 'Second Coming',
  },
  {
    path: 'not-rapture',
    loadComponent: () => import('./not-rapture/not-rapture')
      .then(m => m.NotRapture),
    title: 'Not Rapture',
  }
]
