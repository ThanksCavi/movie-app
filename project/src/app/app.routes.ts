import { Routes } from '@angular/router';
import { PopularMoviesPageComponent } from '@pages/popular-movies-page/popular-movies-page.component';
import { FavoriteMoviesPageComponent } from '@pages/favorite-movies-page/favorite-movies-page.component';
import { WatchListPageComponent } from '@pages/watch-list-page/watch-list-page.component';
import { NowPlayingMoviesPageComponent } from '@pages/now-playing-movies-page/now-playing-movies-page.component';
import { TopRatedMoviesPageComponent } from '@pages/top-rated-movies-page/top-rated-movies-page.component';
import { UpcomingMoviesPageComponent } from '@pages/upcoming-movies-page/upcoming-movies-page.component';
import { OverviewPageComponent } from '@pages/overview-page/overview-page.component';
import { MovieDetailsPageComponent } from '@pages/movie-details-page/movie-details-page.component';
import { AboutComponent } from './pages/about/about.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { TermsOfServicePageComponent } from './pages/terms-of-service-page/terms-of-service-page.component';

export const routes: Routes = [
    { path: '', component: OverviewPageComponent },
    { path: 'now-playing', component: NowPlayingMoviesPageComponent },
    { path: 'popular', component: PopularMoviesPageComponent },
    { path: 'top-rated', component: TopRatedMoviesPageComponent },
    { path: 'upcoming', component: UpcomingMoviesPageComponent },
    { path: 'favorites', component: FavoriteMoviesPageComponent },
    { path: 'watchlist', component: WatchListPageComponent },
    { path: 'movie/:id', component: MovieDetailsPageComponent },
    { path: 'about', component: AboutComponent },
    { path: 'privacy-policy', component: PrivacyPolicyPageComponent },
    { path: 'terms-of-service', component: TermsOfServicePageComponent },
    { path: '**', redirectTo: '' }
];
