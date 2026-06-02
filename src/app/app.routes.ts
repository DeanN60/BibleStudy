import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent:() => import('./feature/home/home')
      .then(m => m.Home),
    title: 'Home'
  },
  {
    path: 'about',
    loadComponent:() => import('./feature/about/about')
      .then(m => m.About),
    title: 'About'
  },
  {
    path: 'doctrine',
    loadChildren: () => import('./feature/doctrine/doctrines-routes')
      .then(m => m.doctrines_routes),
    title: 'Doctrine'
  },
  {
    path: 'theology',
    loadChildren: () => import('./feature/theology/theology-routes')
      .then(m => m.theology_routes),
    title: 'Theology'
  },
  {
    path: 'jesus',
    loadChildren: () => import('./feature/jesus/jesus-routes')
      .then(m => m.jesus_routes),
    title: 'Jesus'
  },
  {
    path: 'time-lines',
    loadChildren: () => import('./feature/time-lines/time-lines-routes')
      .then(m => m.time_lines_routes),
    title: 'Time Lines'
  },
  {
    path: 'listings-of-israel',
    loadChildren: () => import('./feature/listings-of-israel/listings-of-israel-routes')
      .then(m => m.listings_of_israel_routes),
    title: 'Listings of Israel'
  },
  {
    path: 'page-not-found',
    loadComponent: () => import('./core/error-handlers/page-not-found/page-not-found')
      .then(m => m.PageNotFound),
    title: 'Page Not Found'
  },
  {
    path: '**',
    redirectTo: '/page-not-found',
    pathMatch: 'full'
  }
];
