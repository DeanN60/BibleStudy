import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Theology} from './theology';
import {provideRouter} from '@angular/router';

describe('Theology', () => {
  let component: Theology;
  let fixture: ComponentFixture<Theology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Theology],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Theology);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
