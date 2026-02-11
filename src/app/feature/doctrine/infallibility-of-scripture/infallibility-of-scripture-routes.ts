import {Routes} from '@angular/router';

export const infallibility_of_scriptureRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./infallibility-of-scripture')
      .then(m => m.InfallibilityOfScripture),
    title: 'Infallibility'
  },
  {
    path: 'god-breathed',
    loadComponent: () => import('./god-breathed/god-breathed')
      .then(m => m.GodBreathed),
    title: 'God Breathed'
  }
];
