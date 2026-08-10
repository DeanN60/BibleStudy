import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {Genesis49} from './genesis-49';
import {LoiSubMenu} from '../loi-sub-menu/loi-sub-menu';
import {Tribe} from '@core/tribe/tribe';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {MockLoiSubMenu} from '@mock/mock-loi-sub-menu';
import {MockTribe} from '@mock/mock-tribe'

describe('Genesis49 Component', () => {
  let component: Genesis49;
  let fixture: ComponentFixture<Genesis49>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Genesis49
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      // Override child imports if you want to avoid rendering real child components/dependencies
      .overrideComponent(Genesis49, {
        remove: {imports: [LoiSubMenu, Tribe]},
        add: {imports: [MockLoiSubMenu, MockTribe]}
      })
      .compileComponents();

    fixture = TestBed.createComponent(Genesis49);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct pageSubtitle inherited from BasePageWithSubtitle', () => {
    expect(component.pageSubtitle).toBe('Genesis 49 Listing');
  });
});
