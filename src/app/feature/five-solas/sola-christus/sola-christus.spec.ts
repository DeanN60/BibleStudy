import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SolaChristus} from './sola-christus';
import {FiveSolasSubMenu} from '../five-solas-sub-menu/five-solas-sub-menu';
import {Book} from '@core/book';
import {MockFiveSolasSubMenu} from '@mock/mock-five-solas-sub-menu';
import {MockBook} from '@mock/mock-book';
import {john_14_6} from '@books/John/john_14';
import {iJohn_5_11_12} from '@books/I John/iJohn_5';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('SolaChristus Component', () => {
  let component: SolaChristus;
  let fixture: ComponentFixture<SolaChristus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SolaChristus
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
      .overrideComponent(SolaChristus, {
        remove: {imports: [FiveSolasSubMenu, Book]},
        add: {imports: [MockFiveSolasSubMenu, MockBook]}
      })
      .compileComponents();

    fixture = TestBed.createComponent(SolaChristus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the correct pageSubtitle', () => {
    expect(component.pageSubtitle).toBe('Five Sola - Sola Christus');
  });

  it('should bind the scripture constants correctly', () => {
    expect(component['john_14_6']).toEqual(john_14_6);
    expect(component['iJohn_5_11_12']).toEqual(iJohn_5_11_12);
  });
});
