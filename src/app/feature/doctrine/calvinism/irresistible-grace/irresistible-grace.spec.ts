import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IrresistibleGrace} from './irresistible-grace';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('IrresistibleGrace', () => {
  let component: IrresistibleGrace;
  let fixture: ComponentFixture<IrresistibleGrace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IrresistibleGrace
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IrresistibleGrace);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
