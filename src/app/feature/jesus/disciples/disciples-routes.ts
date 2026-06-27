import {Routes} from '@angular/router';

export const disciples_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./disciples')
      .then(m => m.Disciples),
    title: 'Disciples',
  },
  {
    path: 'simon-peter',
    loadComponent: () => import('./simon-peter/simon-peter')
      .then(m => m.SimonPeter),
    title: 'Simon Peter',
  },
  {
    path: 'andrew',
    loadComponent: () => import('./andrew/andrew')
      .then(m => m.Andrew),
    title: 'Andrew',
  },
  {
    path: 'james-son-of-zebedee',
    loadComponent: () => import('./james-son-of-zebedee/james-son-of-zebedee')
      .then(m => m.JamesSonOfZebedee),
    title: 'James son of Zebedee',
  },
  {
    path: 'john',
    loadComponent: () => import('./john/john')
      .then(m => m.John),
    title: 'John',
  },
  {
    path: 'philip',
    loadComponent: () => import('./philip/philip')
      .then(m => m.Philip),
    title: 'Philip',
  },
  {
    path: 'bartholomew',
    loadComponent: () => import('./bartholomew/bartholomew')
      .then(m => m.Bartholomew),
    title: 'Bartholomew',
  },
  {
    path: 'thomas',
    loadComponent: () => import('./thomas/thomas')
      .then(m => m.Thomas),
    title: 'Thomas',
  },
  {
    path: 'matthew',
    loadComponent: () => import('./matthew/matthew')
      .then(m => m.Matthew),
    title: 'Matthew',
  },
  {
    path: 'thaddaeus',
    loadComponent: () => import('./thaddaeus/thaddaeus')
      .then(m => m.Thaddaeus),
    title: 'Thaddaeus',
  },
  {
    path: 'simon-the-zealot',
    loadComponent: () => import('./simon-the-zealot/simon-the-zealot')
      .then(m => m.SimonTheZealot),
    title: 'Simon the Zeaalot',
  },
  {
    path: 'judas-iscariot',
    loadComponent: () => import('./judas-iscariot/judas-iscariot')
      .then(m => m.JudasIscariot),
    title: 'Judas Iscariot',
  },
  {
    path: 'james-son-of-alphaeus',
    loadComponent: () => import('./james-son-of-alphaeus/james-son-of-alphaeus')
      .then(m => m.JamesSonOfAlphaeus),
    title: 'James son of Alphaeus',
  }
]
