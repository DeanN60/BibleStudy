import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTrib } from './post-trib';

describe('PostTrib', () => {
  let component: PostTrib;
  let fixture: ComponentFixture<PostTrib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostTrib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostTrib);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
