import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Revelation6 } from './revelation-6';
import { LoiSubMenu } from '../loi-sub-menu/loi-sub-menu';
import { Tribe } from '@core/tribe/tribe';
import {Component, input} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

// Mock child components if you want to isolate Revelation6 unit testing
@Component({ selector: 'app-loi-sub-menu', standalone: true, template: '' })
class MockLoiSubMenu {}

@Component({ selector: 'app-tribe', standalone: true, template: '' })
class MockTribe {
  name = input<string>();
  showStandard = input<boolean>(false);
}

describe('Revelation6', () => {
  let component: Revelation6;
  let fixture: ComponentFixture<Revelation6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Revelation6
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      // Override child components with mocks if you do not want to render full child trees
      .overrideComponent(Revelation6, {
        remove: { imports: [LoiSubMenu, Tribe] },
        add: { imports: [MockLoiSubMenu, MockTribe] }
      })
      .compileComponents();

    fixture = TestBed.createComponent(Revelation6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the pageSubtitle to "Revelation 6 Listing"', () => {
    expect(component.pageSubtitle).toBe('Revelation 6 Listing');
  });
});
