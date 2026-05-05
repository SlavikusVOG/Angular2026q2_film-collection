import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.html',
  styleUrl: 'breadcrumbs.css',
  imports: [
  ]
})
export class Breadcrumbs {
  private activeRoute = inject(ActivatedRoute);

  getCurrentRoute() {
    console.log(this.activeRoute.snapshot);
    // return this.activeRoute.snapshot.url.join('/');
    return 'home'
  }
}
