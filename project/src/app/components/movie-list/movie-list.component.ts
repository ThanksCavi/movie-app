import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  movies = [
    {
      id: 653346,
      poster: 'https://via.assets.so/movie.png?id=1&q=95&w=500&h=750&fit=fill',
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      rating: 8.8
    },
    {
      id: 345678,
      poster: 'https://via.assets.so/movie.png?id=2&q=95&w=500&h=750&fit=fill',
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      rating: 8.6
    },
    {
      id: 789012,
      poster: 'https://via.assets.so/movie.png?id=3&q=95&w=500&h=750&fit=fill',
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      rating: 9.0
    },
    {
      id: 101112,
      poster: 'https://via.assets.so/movie.png?id=4&q=95&w=500&h=750&fit=fill',
      title: 'The Matrix',
      description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      rating: 8.7
    },
    {
      id: 131415,
      poster: 'https://via.assets.so/movie.png?id=5&q=95&w=500&h=750&fit=fill',
      title: 'Fight Club',
      description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
      rating: 8.8
    }
  ];

  favourites: any[] = [];
  watchList: any[] = [];

  handleAddFavourite(movie: any) {
    if (!this.favourites.some(fav => fav.id === movie.id)) {
      this.favourites.push(movie);
    }
  }

  handleAddWatchList(movie: any) {
    if (!this.watchList.some(watch => watch.id === movie.id)) {
      this.watchList.push(movie);
    }
  }
}
