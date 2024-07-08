import { Component } from '@angular/core';
import { FeaturedMovieComponent } from '@components/featured-movie/featured-movie.component';
import { MovieListComponent } from '@components/movie-list/movie-list.component';
import { MovieService } from '@services/movie.service';

@Component({
  selector: 'app-popular-movies-page',
  standalone: true,
  imports: [MovieListComponent, FeaturedMovieComponent],
  templateUrl: './popular-movies-page.component.html',
  styleUrls: ['./popular-movies-page.component.scss']
})
export class PopularMoviesPageComponent {
  popularMovies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.popularMovies = this.movieService.getPopularMovies();
  }
}
