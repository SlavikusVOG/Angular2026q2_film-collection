import { Routes } from '@angular/router';
import { HomePage } from './homepage/homepage';
import { AboutPage } from './about/about';

export const routes: Routes = [
  {
    path: 'homepage',
    pathMatch: 'prefix',
    component: HomePage,
  },
  {
    path: 'about',
    pathMatch: 'prefix',
    component: AboutPage,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'homepage',
  },
];
