import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { RoundPipe } from '@app/shared/pipes/round-pipe/round.pipe';
import { MovieActionsComponent } from '@components/movie-actions/movie-actions.component';
import { MovieService } from '@services/movie.service';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, CardModule, RoundPipe, MovieActionsComponent],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit, OnChanges {
  @Input() public movie: any;
  @Input() public context: 'favourites' | 'watchlist' | 'default' = 'default';

  public isFavourite: boolean = false;
  public isInWatchlist: boolean = false;

  constructor(private movieService: MovieService, private router: Router) { }

  // Init movie status
  ngOnInit() {
    this.updateMovieStatus();
  }

  // Update on changes
  ngOnChanges(changes: SimpleChanges) {
    if (changes['movie']) {
      this.updateMovieStatus();
    }
  }

  // Check status
  private updateMovieStatus() {
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

  // Navigate to details
  public navigateToDetails() {
    this.router.navigate(['/movie', this.movie.id]);
  }
}
