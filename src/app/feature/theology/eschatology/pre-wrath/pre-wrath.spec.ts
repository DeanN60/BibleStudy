import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PreWrath} from './pre-wrath';
import {provideRouter} from '@angular/router';

describe('PreWrath', () => {
  let component: PreWrath;
  let fixture: ComponentFixture<PreWrath>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreWrath],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(PreWrath);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
