import { Component } from '@angular/core';
import { FeaturedMovieComponent } from '@components/featured-movie/featured-movie.component';
import { MovieListComponent } from '@components/movie-list/movie-list.component';
import { MovieService } from '@services/movie.service';

@Component({
  selector: 'app-overview-page',
  standalone: true,
  imports: [MovieListComponent, FeaturedMovieComponent],
  templateUrl: './overview-page.component.html',
  styleUrl: './overview-page.component.scss'
})
export class OverviewPageComponent {
  topRatedMovies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.topRatedMovies = this.movieService.getTopRatedMovies();
  }
}
