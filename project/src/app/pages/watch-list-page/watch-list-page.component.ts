import { Component } from '@angular/core';
import { MovieListComponent } from '@components/movie-list/movie-list.component';
import { MovieService } from '@services/movie.service';

@Component({
  selector: 'app-watch-list-page',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './watch-list-page.component.html',
  styleUrl: './watch-list-page.component.scss'
})
export class WatchListPageComponent {
  watchlist: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.watchlist = this.movieService.getWatchlist();
  }
}
