import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioReviewComponent } from './scenario-review.component';

describe('ScenarioReviewComponent', () => {
  let component: ScenarioReviewComponent;
  let fixture: ComponentFixture<ScenarioReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScenarioReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScenarioReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
