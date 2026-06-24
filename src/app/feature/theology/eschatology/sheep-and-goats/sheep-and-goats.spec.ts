import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheepAndGoats } from './sheep-and-goats';

describe('SheepAndGoats', () => {
  let component: SheepAndGoats;
  let fixture: ComponentFixture<SheepAndGoats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SheepAndGoats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheepAndGoats);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
