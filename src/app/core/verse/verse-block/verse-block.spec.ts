import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseBlock } from './verse-block';

describe('VerseBlock', () => {
  let component: VerseBlock;
  let fixture: ComponentFixture<VerseBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerseBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerseBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
