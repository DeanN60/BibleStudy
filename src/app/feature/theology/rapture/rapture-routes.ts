import {Routes} from '@angular/router';

export const rapture_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./rapture')
      .then(m => m.Rapture),
    title: 'Rapture'
  },
  {
    path: 'enoch',
    loadComponent: () => import('./enoch/enoch')
      .then(m => m.Enoch),
    title: 'Enoch'
  },
  {
    path: 'elijah',
    loadComponent: () => import('./elijah/elijah')
      .then(m => m.Elijah),
    title: 'Elijah'
  },
  {
    path: 'jesus',
    loadComponent: () => import('./jesus/jesus')
      .then(m => m.Jesus),
    title: 'Jesus'
  },
  {
    path: 'philip',
    loadComponent: () => import('./philip/philip')
      .then(m => m.Philip),
    title: 'Philip'
  },
  {
    path: 'paul',
    loadComponent: () => import('./paul/paul')
      .then(m => m.Paul),
    title: 'Paul'
  },
  {
    path: 'church',
    loadComponent: () => import('./church/church')
      .then(m => m.Church),
    title: 'The Church'
  },
  {
    path: 'witnesses',
    loadComponent: () => import('./witnesses/witnesses')
      .then(m => m.Witnesses),
    title: 'Witnesses'
  },
  {
    path: 'not-second-coming',
    loadComponent: () => import('./not-second-coming/not-second-coming')
      .then(m => m.NotSecondComing),
    title: 'Not Second Coming'
  }
]
