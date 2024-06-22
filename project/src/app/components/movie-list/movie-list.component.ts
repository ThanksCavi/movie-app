import { Component } from '@angular/core';

import { MovieCardComponent } from '../movie-card/movie-card.component';
import { popularMovies } from '../../mock-data';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  movies = popularMovies;
  favourites: any[] = [];
  watchList: any[] = [];


  handleAddFavourite(movie: any) {
    if (!this.favourites.some(fav => fav.id === movie.id)) {
      this.favourites.push(movie);
    }
  }

  handleAddWatchList(movie: any) {
    if (!this.watchList.some(watch => watch.id === movie.id)) {
      this.watchList.push(movie);
    }
  }
}
