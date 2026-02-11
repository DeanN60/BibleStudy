import {Routes} from '@angular/router';

export const time_lines_routes: Routes = [
  {
    path: "",
    loadComponent: () => import('./time-lines')
      .then(m => m.TimeLines),
    title: 'Time Lines'
  },
  {
    path: 'generations',
    loadComponent: () => import('./generations/generations')
      .then(m => m.Generations),
    title: 'Generations'
  }
];
