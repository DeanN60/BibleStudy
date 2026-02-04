import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Tribe} from './tribe';
import {provideHttpClient} from '@angular/common/http';
import {provideZonelessChangeDetection} from '@angular/core';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Tribe', () => {
  let component: Tribe;
  let fixture: ComponentFixture<Tribe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Tribe
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Tribe);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('name', 'Ruben');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
