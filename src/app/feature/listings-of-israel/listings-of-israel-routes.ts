import {Routes} from '@angular/router';

export const listings_of_israel_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./listings-of-israel')
      .then(m => m.ListingsOfIsrael),
    title: 'Listings of Israel'
  },
  {
    path: 'genesis-49',
    loadComponent: () => import('./genesis-49/genesis-49')
      .then(m => m.Genesis49),
    title: 'Genesis 49'
  },
  {
    path: 'numbers-2',
    loadComponent: () => import('./numbers-2/numbers-2')
      .then(m => m.Numbers2),
    title: 'Numbers 2'
  },
  {
    path: 'numbers-13',
    loadComponent: () => import('./numbers-13/numbers-13')
      .then(m => m.Numbers13),
    title: 'Numbers 13'
  },
  {
    path: 'revelation-6',
    loadComponent: () => import('./revelation-6/revelation-6')
      .then(m => m.Revelation6),
    title: 'Revelation 6'
  }
];
