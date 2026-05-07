import { Component, inject } from "@angular/core";
import { HomepageService } from "./homepage.service";
import { FilmCard } from "../film-card/film-card";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
  imports: [
    FilmCard,
  ]
})
export class HomePage {
  private homepageService = inject(HomepageService);

  getFilms() {
    return this.homepageService.getFilms();
  }
}
