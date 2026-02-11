import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfallibilityOfScripture } from './infallibility-of-scripture';

describe('InfallibilityOfScripture', () => {
  let component: InfallibilityOfScripture;
  let fixture: ComponentFixture<InfallibilityOfScripture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfallibilityOfScripture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfallibilityOfScripture);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
