import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PostTrib} from './post-trib';
import {provideRouter} from '@angular/router';

describe('PostTrib', () => {
  let component: PostTrib;
  let fixture: ComponentFixture<PostTrib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostTrib],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(PostTrib);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
