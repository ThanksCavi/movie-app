import { Component } from '@angular/core';
import { FeaturedMovieComponent } from '@components/featured-movie/featured-movie.component';
import { MovieListComponent } from '@components/movie-list/movie-list.component';
import { MovieService } from '@services/movie.service';

@Component({
  selector: 'app-top-rated-movies-page',
  standalone: true,
  imports: [MovieListComponent, FeaturedMovieComponent],
  templateUrl: './top-rated-movies-page.component.html',
  styleUrl: './top-rated-movies-page.component.scss'
})
export class TopRatedMoviesPageComponent {
  topRatedMovies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.topRatedMovies = this.movieService.getTopRatedMovies();
  }
}
