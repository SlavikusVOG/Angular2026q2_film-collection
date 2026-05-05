import { Injectable, signal } from '@angular/core';
import { Film } from '../models/film.data';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  private films = signal<Film[]>([]);
}
