import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Deity} from './deity';
import {provideRouter} from '@angular/router';

describe('Deity', () => {
  let component: Deity;
  let fixture: ComponentFixture<Deity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deity],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Deity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
