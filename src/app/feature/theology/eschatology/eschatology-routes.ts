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
  },
  {
    path: 'sheep-and-goats',
    loadComponent: () => import('./sheep-and-goats/sheep-and-goats')
      .then(m => m.SheepAndGoats),
    title: 'Sheep And Goats'
  },
  {
    path: 'jacobs-trouble',
    loadComponent: () => import('./jacobs-trouble/jacobs-trouble')
      .then(m => m.JacobsTrouble),
    title: 'Jacob`s Trouble'
  },
  {
    path: 'day-of-the-lord',
    loadComponent: () => import('./day-of-the-lord/day-of-the-lord')
      .then(m => m.DayOfTheLord),
    title: 'Day of the Lord'
  },
  {
    path: 'rapture',
    loadComponent: () => import('./rapture/rapture')
      .then(m => m.Rapture),
    title: 'Rapture'
  },
  {
    path: 'rapture-of-enoch',
    loadComponent: () => import('./rapture-of-enoch/rapture-of-enoch')
      .then(m => m.RaptureOfEnoch),
    title: 'Rapture of Enoch'
  },
  {
    path: 'rapture-of-elijah',
    loadComponent: () => import('./rapture-of-elijah/rapture-of-elijah')
      .then(m => m.RaptureOfElijah),
    title: 'Rapture of Elijah'
  },
  {
    path: 'rapture-of-jesus',
    loadComponent: () => import('./rapture-of-jesus/rapture-of-jesus')
      .then(m => m.RaptureOfJesus),
    title: 'Rapture of Jesus'
  },
  {
    path: 'rapture-of-philip',
    loadComponent: () => import('./rapture-of-philip/rapture-of-philip')
      .then(m => m.RaptureOfPhilip),
    title: 'Rapture of Philip'
  },
  {
    path: 'rapture-of-paul',
    loadComponent: () => import('./rapture-of-paul/rapture-of-paul')
      .then(m => m.RaptureOfPaul),
    title: 'Rapture of Paul'
  },
  {
    path: 'rapture-of-church',
    loadComponent: () => import('./rapture-of-church/rapture-of-church')
      .then(m => m.RaptureOfChurch),
    title: 'Rapture of Church'
  },
  {
    path: 'rapture-of-two-witnesses',
    loadComponent: () => import('./rapture-of-two-witnesses/rapture-of-two-witnesses')
      .then(m => m.RaptureOfTwoWitnesses),
    title: 'Rapture of Two Witnesses'
  },
  {
    path: 'rapture-not-second-coming',
    loadComponent: () => import('./rapture-not-second-coming/rapture-not-second-coming')
      .then(m => m.RaptureNotSecondComing),
    title: 'Rapture Not Second Coming'
  }
];
