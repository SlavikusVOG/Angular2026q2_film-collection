import { Component, inject } from "@angular/core";
import { Router, RouterLink, ActivatedRoute } from "@angular/router";

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
  private activatedRoute = inject(ActivatedRoute);

  getCurrentRoute() {
    const url = this.router.url;
    if (url === '/') {
      return [];
    }
    const segments = url.slice(1).split('/');
    return segments;
  }

  getBreadcrumb(segment: string) {
    // TODO: improve with active route
    const config = this.router.config;
    const route = config.find(route => route.path === segment);
    if (route) {
      return route.data?.['breadcrumb'][segment];
    }
    return null;
  }
}
