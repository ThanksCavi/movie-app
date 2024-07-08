import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { RoundPipe } from '@app/shared/pipes/round-pipe/round.pipe';
import { MovieService } from '@services/movie.service';

@Component({
  selector: 'app-featured-movie',
  standalone: true,
  imports: [CarouselModule, CardModule, RoundPipe],
  templateUrl: './featured-movie.component.html',
  styleUrls: ['./featured-movie.component.scss']
})
export class FeaturedMovieComponent implements OnInit {
  featuredMovies: any[] = [];

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.featuredMovies = this.movieService.getFeaturedMovies();
  }

  public navigateToDetails(id: number): void {
    this.router.navigate(['/movie', id]);
  }
}
