import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '@components/movie-list/movie-list.component';
import { MovieService } from '@services/movie.service';

@Component({
  selector: 'app-favorite-movies-page',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './favorite-movies-page.component.html',
  styleUrl: './favorite-movies-page.component.scss'
})
export class FavoriteMoviesPageComponent implements OnInit {
  favouriteMovies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.favouriteMovies = this.movieService.getFavourites();
  }
}

