import { Component, inject } from "@angular/core";
import { HomepageService } from "./homepage.service";
import { FilmCard } from "../film-card/film-card";
import { Router } from "@angular/router";
import { Film } from "../models/film.data";

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
  private router = inject(Router);

  getFilms() {
    return this.homepageService.getFilms();
  }

  onFilmCardClick(film: Film) {
    this.router.navigate(['/homepage/film', film.id]);
  }
}
