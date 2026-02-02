import {Routes} from '@angular/router';

export const dispensation_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dispensation')
      .then(m => m.Dispensation),
    title: 'Dispensation'
  },
  {
    path: 'conscience',
    loadComponent: () => import('./conscience/conscience')
      .then(m => m.Conscience),
    title: 'Conscience'
  },
  {
    path: 'grace',
    loadComponent: () => import('./grace/grace')
      .then(m => m.Grace),
    title: 'Grace'
  },
  {
    path: 'human-government',
    loadComponent: () => import('./human-government/human-government')
      .then(m => m.HumanGovernment),
    title: 'Human Government'
  },
  {
    path: 'innocence',
    loadComponent: () => import('./innocence/innocence')
      .then(m => m.Innocence),
    title: 'Innocence'
  },
  {
    path: 'law',
    loadComponent: () => import('./law/law')
      .then(m => m.Law),
    title: 'Law'
  },
  {
    path: 'millennium',
    loadComponent: () => import('./millennium/millennium')
      .then(m => m.Millennium),
    title: 'Millennium'
  },
  {
    path: 'promise',
    loadComponent: () => import('./promise/dispensation-promise')
      .then(m => m.DispensationPromise),
    title: 'DispensationPromise'
  }
];
