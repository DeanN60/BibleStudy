import {Routes} from '@angular/router';

export const temple_destruction_seventy_ad: Routes = [
  {
    path: '',
    loadComponent: () => import('./temple-destruction-seventy-ad')
      .then(m => m.TempleDestructionSeventyAd),
    title: 'Temple Destruction Seventy AD',
  },
  {
    path: 'legio-x-fretensis',
    loadComponent: () => import('./legio-x-fretensis/legio-x-fretensis')
      .then(m => m.LegioXFretensis),
    title: 'Legio X Festensis',
  },
  {
    path: 'legio-v-macedonica',
    loadComponent: () => import('./legio-v-macedonica/legio-v-macedonica')
      .then(m => m.LegioVMacedonica),
    title: 'Legio V Macedonica',
  },
  {
    path: 'legio-xv-apollinaris',
    loadComponent: () => import('./legio-xv-apollinaris/legio-xv-apollinaris')
      .then(m => m.LegioXvApollinaris),
    title: 'Legio XV Apollinaris',
  },
  {
    path: 'legio-xii-fulminata',
    loadComponent: () => import('./legio-xii-fulminata/legio-xii-fulminata')
      .then(m => m.LegioXiiFulminata),
    title: 'Legio XII Fulminata',
  },
  {
    path: 'legio-iii-cyrenaica',
    loadComponent: () => import('./legio-iii-cyrenaica/legio-iii-cyrenaica')
      .then(m => m.LegioIiiCyrenaica),
    title: 'Legio III Cyrenaica',
  },
  {
    path: 'legio-xxii-deiotariana',
    loadComponent: () => import('./legio-xxii-deiotariana/legio-xxii-deiotariana')
      .then(m => m.LegioXxiiDeiotariana),
    title: 'Legio XXII Deiotariana',
  },
  {
    path: 'legio-iii-gallica',
    loadComponent: () => import('./legio-iii-gallica/legio-iii-gallica')
      .then(m => m.LegioIiiGallica),
    title: 'Legio III Gallica',
  }
]
