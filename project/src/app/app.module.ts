import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppComponent,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }


// import { RouterModule, Routes } from '@angular/router';
// import { MovieListComponent } from './components/movie-list/movie-list.component';
// import { MovieCardComponent } from './components/movie-card/movie-card.component';

// const routes: Routes = [
//     { path: '', component: MovieListComponent }
// ];

// @NgModule({
//     declarations: [
//         AppComponent,
//         MovieListComponent,
//         MovieCardComponent
//     imports: [
//         RouterModule.forRoot(routes)
//     ],
//     providers: [],
//     bootstrap: [AppComponent]
// })
// export class AppModule { }