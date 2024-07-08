import { Component, Input } from '@angular/core';
import { MovieCardComponent } from '@components/movie-card/movie-card.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  @Input() movies: any[] = [];
  @Input() title: string = '';
  @Input() context: 'favourites' | 'watchlist' | 'default' = 'default';
}
