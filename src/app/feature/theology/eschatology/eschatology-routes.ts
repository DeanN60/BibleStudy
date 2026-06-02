import {Routes} from '@angular/router';

export const eschatology_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./eschatology')
      .then(m => m.Eschatology),
    title: 'Eschatology'
  },
  {
    path: 'pre-trib',
    loadComponent: () => import('./pre-trib/pre-trib')
      .then(m => m.PreTrib),
    title: 'Pre-Tribulation'
  },
  {
    path: 'mid-trib',
    loadComponent: () => import('./mid-trib/mid-trib')
      .then(m => m.MidTrib),
    title: 'Mid-Tribulation'
  },
  {
    path: 'post-trib',
    loadComponent: () => import('./post-trib/post-trib')
      .then(m => m.PostTrib),
    title: 'Post-Tribulation'
  },
  {
    path: 'pre-wrath',
    loadComponent: () => import('./pre-wrath/pre-wrath')
      .then(m => m.PreWrath),
    title: 'Pre-Wrath'
  }
];
