import { Injectable } from '@angular/core';
import { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies, featuredMovies } from '@app/mock-data';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private favourites: any[] = [];
  private watchlist: any[] = [];

  // !!
  private allMovies: any[] = Array.from(new Set([
    ...nowPlayingMovies,
    ...popularMovies,
    ...topRatedMovies,
    ...upcomingMovies,
    ...featuredMovies
  ]));

  constructor() { }

  // Movie Сategories
  public getNowPlayingMovies() {
    return nowPlayingMovies;
  }

  public getPopularMovies() {
    return popularMovies;
  }

  public getTopRatedMovies() {
    return topRatedMovies;
  }

  public getUpcomingMovies() {
    return upcomingMovies;
  }

  public getFeaturedMovies() {
    return featuredMovies;
  }

  // Add to a list
  private addToList(list: any[], movie: any) {
    list.push(movie);
  }

  // Remove from a list
  private removeFromList(list: any[], movie: any) {
    return list.filter((m: any) => m.id !== movie.id);
  }

  // Check if in a list
  private isInList(list: any[], movie: any): boolean {
    return list.some((m: any) => m.id === movie.id);
  }

  // Favourites
  public addFavourite(movie: any) {
    this.addToList(this.favourites, movie);
  }

  public removeFavourite(movie: any) {
    this.favourites = this.removeFromList(this.favourites, movie);
  }

  public isFavourite(movie: any): boolean {
    return this.isInList(this.favourites, movie);
  }

  public getFavourites() {
    return this.favourites;
  }

  // Watchlist
  public addWatchlist(movie: any) {
    this.addToList(this.watchlist, movie);
  }

  public removeWatchlist(movie: any) {
    this.watchlist = this.removeFromList(this.watchlist, movie);
  }

  public isInWatchlist(movie: any): boolean {
    return this.isInList(this.watchlist, movie);
  }

  public getWatchlist() {
    return this.watchlist;
  }

  // Get a movie by ID
  public getMovieById(id: number) {
    return this.allMovies.find(movie => movie.id === id);
  }
}
