import {Routes} from '@angular/router';

export const key_points_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./key-points')
      .then(m => m.KeyPoints),
    title: 'Key Points',
  },
  {
    path: 'temple-destruction-seventy-ad',
    loadChildren: () => import('./temple-destruction-seventy-ad/temple-destruction-seventy-ad-routes')
      .then(m => m.temple_destruction_seventy_ad),
    title: 'Temple destruction 70AD',
  }
]
