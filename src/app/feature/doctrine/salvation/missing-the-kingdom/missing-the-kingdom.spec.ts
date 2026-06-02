import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MissingTheKingdom} from './missing-the-kingdom';
import {provideRouter} from '@angular/router';

describe('MissingTheKingdom', () => {
  let component: MissingTheKingdom;
  let fixture: ComponentFixture<MissingTheKingdom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissingTheKingdom],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(MissingTheKingdom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
