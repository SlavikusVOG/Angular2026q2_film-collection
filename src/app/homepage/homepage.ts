import { Component, inject, signal } from "@angular/core";
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
  private films = signal<Film[]>([]);

  ngAfterViewInit() {
    this.attachEvents();
    this.focusSearch();
    const allFilms = this.getAllFilms();
    this.films.set(allFilms);
  }

  attachEvents() {
    const searchInput = document.querySelector('search input') as HTMLInputElement;
    if (searchInput) {
      searchInput.addEventListener('input', this.onSearchInput.bind(this));
    }
  }

  onSearchInput(event: Event) {
    const searchInput = event.target as HTMLInputElement;
    const searchValue = searchInput.value;
    const allFilms = this.getAllFilms();
    const filteredFilms = allFilms.filter(film => film.title.toLowerCase().includes(searchValue.toLowerCase()));
    this.films.set(filteredFilms);
  }

  focusSearch() {
    const searchInput = document.querySelector('search input') as HTMLInputElement;
    if (searchInput) {
      searchInput.focus();
      searchInput.select();
    }
  }

  getFilms() {
    return this.films();
  }

  getAllFilms() {
    return this.homepageService.getFilms();
  }

  onFilmCardClick(event: Event, film: Film) {
    if (event.target instanceof HTMLButtonElement || event.target instanceof SVGElement) {
      return;
    }
    this.router.navigate(['/homepage/film', film.id]);
  }
}
