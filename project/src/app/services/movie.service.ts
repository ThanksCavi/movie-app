import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // counter: number = 0;

  constructor() { }

  getNowPtayingMovies() {
    return nowPlayingMovies;
  }

  getPopularMovies() {
    return popularMovies;
  }

  // increaseCounter() {
  //   this.counter++;
  // }

  // decreaseCounter() {
  //   this.counter--;
  // }
}
