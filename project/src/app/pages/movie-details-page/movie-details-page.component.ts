import { Component, OnInit } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';

import { RoundPipe } from '@app/shared/pipes/round-pipe/round.pipe';
import { MovieService } from '@services/movie.service';
import { MovieActionsComponent } from '@components/movie-actions/movie-actions.component';

import localeUk from '@angular/common/locales/uk';
registerLocaleData(localeUk);

@Component({
  selector: 'app-movie-details-page',
  standalone: true,
  imports: [CommonModule, ButtonModule, RoundPipe, FormsModule, RatingModule, MovieActionsComponent],
  providers: [],
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss']
})
export class MovieDetailsPageComponent implements OnInit {
  public movie: any;
  public isFavourite: boolean = false;
  public isInWatchlist: boolean = false;
  public context: 'favourites' | 'watchlist' | 'default' = 'default';

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieService.getMovieById(id);
    this.isFavourite = this.movieService.isFavourite(this.movie);
    this.isInWatchlist = this.movieService.isInWatchlist(this.movie);
  }

  // Toggle favourite
  public toggleFavourite() {
    this.isFavourite ? this.movieService.removeFavourite(this.movie) : this.movieService.addFavourite(this.movie);
    this.isFavourite = !this.isFavourite;
  }

  // Toggle watchlist
  public toggleWatchlist() {
    this.isInWatchlist ? this.movieService.removeWatchlist(this.movie) : this.movieService.addWatchlist(this.movie);
    this.isInWatchlist = !this.isInWatchlist;
  }
}
