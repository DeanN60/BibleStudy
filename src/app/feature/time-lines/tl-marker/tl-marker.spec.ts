import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlMarker } from './tl-marker';

describe('TlMarker', () => {
  let component: TlMarker;
  let fixture: ComponentFixture<TlMarker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TlMarker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TlMarker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
