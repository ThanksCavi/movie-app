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
