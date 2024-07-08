import { Component } from '@angular/core';
import { FeaturedMovieComponent } from '@components/featured-movie/featured-movie.component';
import { MovieListComponent } from '@components/movie-list/movie-list.component';
import { MovieService } from '@services/movie.service';

@Component({
  selector: 'app-upcoming-movies-page',
  standalone: true,
  imports: [MovieListComponent, FeaturedMovieComponent],
  templateUrl: './upcoming-movies-page.component.html',
  styleUrl: './upcoming-movies-page.component.scss'
})
export class UpcomingMoviesPageComponent {
  upcomingMovies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.upcomingMovies = this.movieService.getUpcomingMovies();
  }
}
