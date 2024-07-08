import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-movie-actions',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './movie-actions.component.html',
  styleUrl: './movie-actions.component.scss'
})
export class MovieActionsComponent {
  @Input() public isFavourite: boolean = false;
  @Input() public isInWatchlist: boolean = false;
  @Input() public context: 'favourites' | 'watchlist' | 'default' = 'default';
  @Input() public styleContext: 'card' | 'details' = 'card';
  @Output() public favouriteToggled = new EventEmitter<void>();
  @Output() public watchlistToggled = new EventEmitter<void>();

  get buttonClass(): string {
    return `action-button action-button--${this.styleContext}`;
  }

  public toggleFavourite(event: Event) {
    event.stopPropagation();
    this.favouriteToggled.emit();
  }

  public toggleWatchlist(event: Event) {
    event.stopPropagation();
    this.watchlistToggled.emit();
  }
}