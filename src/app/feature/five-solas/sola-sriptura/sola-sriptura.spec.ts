import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolaSriptura } from './sola-sriptura';
import {Book} from '@core/book';
import {FiveSolasSubMenu} from '../five-solas-sub-menu/five-solas-sub-menu';
import {MockFiveSolasSubMenu} from '@mock/mock-five-solas-sub-menu';
import {MockBook} from '@mock/mock-book';
import {iiTim_3_16_17} from '@books/II Timothy/iiTim_3';

describe('SolaSriptura', () => {
  let component: SolaSriptura;
  let fixture: ComponentFixture<SolaSriptura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolaSriptura]
    })
      .overrideComponent(SolaSriptura, {
        remove: { imports: [FiveSolasSubMenu, Book] },
        add: { imports: [MockFiveSolasSubMenu, MockBook] }
      })
      .compileComponents();

    fixture = TestBed.createComponent(SolaSriptura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct pageSubtitle', () => {
    expect(component.pageSubtitle).toBe('Five Sola - Sola Scriptura');
  });

  it('should expose iiTim_3_16_17 property', () => {
    expect(component['iiTim_3_16_17']).toBe(iiTim_3_16_17);
  });
});
