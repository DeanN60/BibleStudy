import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PreTrib} from './pre-trib';
import {provideRouter} from '@angular/router';

describe('PreTrib', () => {
  let component: PreTrib;
  let fixture: ComponentFixture<PreTrib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreTrib],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(PreTrib);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
