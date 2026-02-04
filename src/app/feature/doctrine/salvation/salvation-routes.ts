import {Routes} from '@angular/router';

export const salvation_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./salvation')
      .then(m => m.Salvation),
    title: 'Salvation'
  },
  {
    path: 'gift-of-god',
    loadComponent: () => import('./gift-of-god/gift-of-god')
      .then(m => m.GiftOfGod),
    title: 'Gift of God'
  },
  {
    path: 'need-for-salvation',
    loadComponent: () => import('./need-for-salvation/need-for-salvation')
      .then(m => m.NeedForSalvation),
    title: 'Need for Salvation'
  },
  {
    path: 'not-of-works',
    loadComponent: () => import('./not-of-works/not-of-works')
      .then(m => m.NotOfWorks),
    title: 'Not of Works'
  }
];
