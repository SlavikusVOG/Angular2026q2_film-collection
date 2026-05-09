import { Component, inject } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { HomepageService } from "../homepage/homepage.service";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.html',
  styleUrl: 'breadcrumbs.css',
  imports: [
    RouterLink,
  ]
})
export class Breadcrumbs {
  private router = inject(Router);
  private filmsService = inject(HomepageService);

  // TODO: with activated route
  // constructor() {
  //   this.router.events.pipe(
  //     filter(event => event instanceof NavigationEnd)
  //   ).subscribe(() => {
  //     this.snapshot = this.activatedRoute.snapshot;
  //   });
  // }

  getCurrentUrl(): string {
    const url = this.router.url;
    return url || '';
  }

  getUrlForBreadcrumb() {
    const url = this.router.url;
    console.log('url', url);
    if (url.startsWith('/homepage/film')) {
      const urlArray = url.split('/')
      if (urlArray.length > 1) {
        urlArray.pop()
        return urlArray.join('/');
      }
      return '/'
    }
    return url || '';
  }

  getFilmTitle() {
    console.log('current url', this.getCurrentUrl());
    const urlArray = this.router.url.split('/');
    const filmId = urlArray.pop();
    const film = this.filmsService.getFilmById(Number(filmId));
    return film?.title || 'unknown film title';
  }
}
