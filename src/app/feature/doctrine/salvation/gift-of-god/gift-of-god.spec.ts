import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GiftOfGod} from './gift-of-god';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('GiftOfGod', () => {
  let component: GiftOfGod;
  let fixture: ComponentFixture<GiftOfGod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GiftOfGod
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GiftOfGod);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
