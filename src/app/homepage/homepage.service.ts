import { Injectable, signal } from '@angular/core';
import { Film } from '../models/film.data';
import filmsMockData from '../../../data/films.json';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  private films = signal<Film[]>(filmsMockData);

  getFilms(): Film[] {
    return this.films();
  }
}
