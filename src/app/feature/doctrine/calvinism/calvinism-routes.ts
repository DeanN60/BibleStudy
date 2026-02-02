import {Routes} from '@angular/router';

export const calvinism_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./calvinism')
      .then(m => m.Calvinism),
    title: 'Calvinism'
  },
  {
    path: 'total-depravity',
    loadComponent: () => import('./total-depravity/total-depravity')
      .then(m => m.TotalDepravity),
    title: 'Total Depravity'
  },
  {
    path: 'unconditional-election',
    loadComponent: () => import('./unconditional-election/unconditional-election')
      .then(m => m.UnconditionalElection),
    title: 'Unconditional Election'
  },
  {
    path: 'limited-atonement',
    loadComponent: () => import('./limited-atonement/limited-atonement')
      .then(m => m.LimitedAtonement),
    title: 'Limited Atonement'
  },
  {
    path: 'irresistible-grace',
    loadComponent: () => import('./irresistible-grace/irresistible-grace')
      .then(m => m.IrresistibleGrace),
    title: 'Irresistible Grace'
  },
  {
    path: 'perseverance-of-the-saints',
    loadComponent: () => import('./perseverance-of-the-saints/perseverance-of-the-saints')
      .then(m => m.PerseveranceOfTheSaints),
    title: 'Perseverance of the Saints'
  }
]
