import { Component, inject, input, signal } from "@angular/core";
import { Film } from "../models/film.data";
import { HomepageService } from "../homepage/homepage.service";
import { ActivatedRoute } from "@angular/router";
import { FilmPageService } from "./film-page.service";
import { DurationPipe } from "../pipes/duration-pipe";

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.html',
  styleUrl: './film-page.css',
  imports: [
    DurationPipe,
  ]
})
export class FilmPage {
  private homepageService = inject(HomepageService);
  private activatedRoute = inject(ActivatedRoute);
  protected film = signal<Film | null>(null);
  private filmPageService = inject(FilmPageService);
  constructor() {
    const filmId = Number(this.activatedRoute.snapshot.params['id']);
    this.film.set(this.homepageService.getFilmById(filmId) || null);
  }
}
