import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MidTrib} from './mid-trib';
import {provideRouter} from '@angular/router';

describe('MidTrib', () => {
  let component: MidTrib;
  let fixture: ComponentFixture<MidTrib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidTrib],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(MidTrib);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
