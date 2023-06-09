import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAreaComponent } from './update-area.component';

describe('UpdateAreaComponent', () => {
  let component: UpdateAreaComponent;
  let fixture: ComponentFixture<UpdateAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
