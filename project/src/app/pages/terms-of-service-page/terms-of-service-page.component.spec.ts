import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsOfServicePageComponent } from './terms-of-service-page.component';

describe('TermsOfServicePageComponent', () => {
  let component: TermsOfServicePageComponent;
  let fixture: ComponentFixture<TermsOfServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsOfServicePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermsOfServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
