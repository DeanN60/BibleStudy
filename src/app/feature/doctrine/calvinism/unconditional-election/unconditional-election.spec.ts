import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnconditionalElection } from './unconditional-election';

describe('UnconditionalElection', () => {
  let component: UnconditionalElection;
  let fixture: ComponentFixture<UnconditionalElection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnconditionalElection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnconditionalElection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
