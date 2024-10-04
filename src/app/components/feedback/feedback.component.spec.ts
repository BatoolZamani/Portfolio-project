import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackSliderComponent } from './feedback.component';

describe('FeedbackComponent', () => {
  let component: FeedbackSliderComponent;
  let fixture: ComponentFixture<FeedbackSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});