import { Component, InputSignal, input, signal } from '@angular/core';
import { FilmCard as FilmCardInterface } from '../models/film.data';

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.html',
  styleUrl: './film-card.css',
})
export class FilmCard {
  film: InputSignal<FilmCardInterface> = input.required<FilmCardInterface>();
  isFavorite = signal(false);

  onInit() {
    this.isFavorite.set(this.film().isFavorite);
  }

  toggleFavorite() {
    this.film().isFavorite = !this.film().isFavorite;
    this.isFavorite.set(this.film().isFavorite);
  }
}
