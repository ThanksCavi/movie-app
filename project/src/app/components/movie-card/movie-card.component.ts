import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() data: any;
  @Output() addFavourite = new EventEmitter<void>();
  @Output() addWatchList = new EventEmitter<void>();

  addToFavourites() {
    this.addFavourite.emit();
    //console.log('Added to favourites');
  }

  addToWatchList() {
    this.addWatchList.emit();
    //console.log('Added to watch list');
  }
}
