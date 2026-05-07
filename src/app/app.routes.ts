import { Routes } from '@angular/router';
import { HomePage } from './homepage/homepage';
import { AboutPage } from './about/about';
import { FilmPage } from './film-page/film-page';

export const routes: Routes = [
  {
    path: 'homepage',
    pathMatch: 'prefix',
    component: HomePage,
    data: {
      breadcrumb: {
        homepage: 'Home',
      },
    }
  },
  {
    path: 'about',
    pathMatch: 'prefix',
    component: AboutPage,
    data: {
      breadcrumb: {
        about: 'About'
      },
    }
  },
  {
    path: 'homepage/film/:id',
    pathMatch: 'prefix',
    component: FilmPage,
    data: {
      breadcrumb: {
        homepage: 'Home',
        film: 'Film',
      },
    }
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'homepage',
  },
];
