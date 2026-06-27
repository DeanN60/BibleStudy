import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamesSonOfZebedee } from './james-son-of-zebedee';

describe('JamesSonOfZebedee', () => {
  let component: JamesSonOfZebedee;
  let fixture: ComponentFixture<JamesSonOfZebedee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JamesSonOfZebedee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JamesSonOfZebedee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
