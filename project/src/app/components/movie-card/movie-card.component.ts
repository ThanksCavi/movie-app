import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RoundPipe } from '../../shared/pipes/round-pipe/round.pipe';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RoundPipe],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() data: any;
  @Output() addFavourite = new EventEmitter<void>();
  @Output() addWatchList = new EventEmitter<void>();

  addToFavourites() {
    this.addFavourite.emit();
  }

  addToWatchList() {
    this.addWatchList.emit();
  }
}
