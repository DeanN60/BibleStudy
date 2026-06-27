import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudasIscariot } from './judas-iscariot';

describe('JudasIscariot', () => {
  let component: JudasIscariot;
  let fixture: ComponentFixture<JudasIscariot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JudasIscariot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudasIscariot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
