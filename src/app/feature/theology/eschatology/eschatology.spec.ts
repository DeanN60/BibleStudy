import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Eschatology} from './eschatology';
import {provideRouter} from '@angular/router';

describe('Eschatology', () => {
  let component: Eschatology;
  let fixture: ComponentFixture<Eschatology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eschatology],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Eschatology);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
