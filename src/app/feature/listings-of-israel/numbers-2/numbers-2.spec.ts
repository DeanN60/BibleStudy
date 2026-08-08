import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {Numbers2} from './numbers-2';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
// import * as mockData from './your-constants-file'; // adjust import path as needed

// Mock child components to isolate the component under test
@Component({selector: 'app-loi-sub-menu', standalone: true, template: ''})
class MockLoiSubMenu {
}

@Component({selector: 'app-tribe', standalone: true, template: ''})
class MockTribe {
}

@Component({selector: 'app-book', standalone: true, template: ''})
class MockBook {
}

describe('Numbers2 Component', () => {
  let component: Numbers2;
  let fixture: ComponentFixture<Numbers2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Numbers2
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Numbers2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should set pageSubtitle to "Numbers 2 Listing"', () => {
    expect(component.pageSubtitle).toBe('Numbers 2 Listing');
  });

  it('should expose scripture reference constants to the template', () => {
    expect(component['num_2_3_9']).toBeDefined();
    expect(component['num_2_10_16']).toBeDefined();
    expect(component['num_2_17_24']).toBeDefined();
    expect(component['num_2_25_31']).toBeDefined();
    expect(component['ezekiel_1_10']).toBeDefined();
    expect(component['rev_4_6_7']).toBeDefined();
  });
});


// import {ComponentFixture, TestBed} from '@angular/core/testing';
//
// import {Numbers2} from './numbers-2';
// import {provideRouter} from '@angular/router';
// import {provideHttpClient} from '@angular/common/http';
// import {provideHttpClientTesting} from '@angular/common/http/testing';
//
// describe('Numbers2', () => {
//   let component: Numbers2;
//   let fixture: ComponentFixture<Numbers2>;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         Numbers2
//       ],
//       providers: [
//         provideRouter([]),
//         provideHttpClient(),
//         provideHttpClientTesting()
//       ],
//     }).compileComponents();
//
//     fixture = TestBed.createComponent(Numbers2);
//     component = fixture.componentInstance;
//     await fixture.whenStable();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
