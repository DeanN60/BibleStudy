import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsOfIsrael } from './listings-of-israel';

describe('ListingsOfIsrael', () => {
  let component: ListingsOfIsrael;
  let fixture: ComponentFixture<ListingsOfIsrael>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingsOfIsrael]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingsOfIsrael);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
