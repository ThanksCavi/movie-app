import { Component } from '@angular/core';
import { FeaturedMovieComponent } from '@components/featured-movie/featured-movie.component';
import { MovieListComponent } from '@components/movie-list/movie-list.component';
import { MovieService } from '@services/movie.service';

@Component({
  selector: 'app-now-playing-movies-page',
  standalone: true,
  imports: [MovieListComponent, FeaturedMovieComponent],
  templateUrl: './now-playing-movies-page.component.html',
  styleUrl: './now-playing-movies-page.component.scss'
})
export class NowPlayingMoviesPageComponent {
  nowPlayingMovies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.nowPlayingMovies = this.movieService.getNowPlayingMovies();
  }
}
