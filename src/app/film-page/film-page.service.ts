import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class FilmPageService {
  getFormattedDuration(duration: number) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}h ${minutes}m`;
  }
}
