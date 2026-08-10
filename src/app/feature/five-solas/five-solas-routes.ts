import {Routes} from '@angular/router';

export const fiveSolasRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./five-solas')
      .then(m => m.FiveSolas),
    title: 'Five Solas'
  },
  {
    path: 'solas-scriptura',
    loadComponent: () => import('./sola-sriptura/sola-sriptura')
      .then(m => m.SolaSriptura),
    title: 'Solas Scriptura'
  },
  {
    path: 'solas-fide',
    loadComponent: () => import('./sola-fide/sola-fide')
      .then(m => m.SolaFide),
    title: 'Solas Fide'
  },
  {
    path: 'solas-gratia',
    loadComponent: () => import('./sola-gratia/sola-gratia')
      .then(m => m.SolaGratia),
    title: 'Solas Gratia'
  },
  {
    path: 'solas-christus',
    loadComponent: () => import('./sola-christus/sola-christus')
      .then(m => m.SolaChristus),
    title: 'Solas Christus'
  },
  {
    path: 'solas-deo-gloria',
    loadComponent: () => import('./sola-deo-gloria/sola-deo-gloria')
      .then(m => m.SolaDeoGloria),
    title: 'Solas Deo Gloria'
  }
]
