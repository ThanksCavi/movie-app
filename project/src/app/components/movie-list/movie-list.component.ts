import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { MOVIES } from '../../mock-data';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  movies = MOVIES;

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
