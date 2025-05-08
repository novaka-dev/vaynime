// src/types/anime.ts
export interface Anime {
  id: number;
  title: string;
  image: string;
  rating: string;
  genre: string[];
  year: number;
  season: string;
  episodes: string;
  description: string;
}

export interface AnimeDetail {
  id: string;
  title: string;
  description: string;
  image: string;
  banner: string;
  rating: string;
  episodes: string;
  season: string;
  year: string;
  status: string;
  genres: string[];
  studios: string[];
  duration: string;
}
