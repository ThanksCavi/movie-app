import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteMoviePageComponent } from './favorite-movie-page.component';

describe('FavoriteMoviePageComponent', () => {
  let component: FavoriteMoviePageComponent;
  let fixture: ComponentFixture<FavoriteMoviePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteMoviePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoriteMoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
