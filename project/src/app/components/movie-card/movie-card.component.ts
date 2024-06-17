import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
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
