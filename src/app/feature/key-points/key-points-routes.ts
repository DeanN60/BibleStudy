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
    loadComponent: () => import('./temple-destruction-seventy-ad/temple-destruction-seventy-ad')
      .then(m => m.TempleDestructionSeventyAd),
    title: 'Temple destruction 70AD',
  }
]
