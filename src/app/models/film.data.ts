export interface Film {
  id: number;
  title: string;
  genre: string;
  rating: number;
  duration: number;
  description: string;
  posterUrl: string;
  isFavorite: boolean;
}

export interface FilmCard {
  poster: string;
  title: string;
  year: number;
  genre: string;
  rating: number;
}
