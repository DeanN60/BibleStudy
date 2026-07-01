import {Routes} from '@angular/router';

export const time_lines_routes: Routes = [
  {
    path: "",
    loadComponent: () => import('./time-lines')
      .then(m => m.TimeLines),
    title: 'Time Lines'
  },
  {
    path: 'history-time-line',
    loadComponent: () => import('./history-time-line/history-time-line')
      .then(m => m.HistoryTimeLine),
    title: 'History Time Line'
  },
  {
    path: 'life-of-jesus',
    loadComponent: () => import('./life-of-jesus/life-of-jesus')
      .then(m => m.LifeOfJesus),
    title: 'Life of Jesus'
  }
];
