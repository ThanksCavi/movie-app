import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RoundPipe } from '../../shared/pipes/round-pipe/round.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RoundPipe, MatCardModule, MatIconModule, MatButtonModule],
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
