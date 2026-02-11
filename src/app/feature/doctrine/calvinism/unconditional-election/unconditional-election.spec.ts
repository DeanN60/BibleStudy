import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UnconditionalElection} from './unconditional-election';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('UnconditionalElection', () => {
  let component: UnconditionalElection;
  let fixture: ComponentFixture<UnconditionalElection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UnconditionalElection
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UnconditionalElection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
