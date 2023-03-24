import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCozinhaComponent } from './update-cozinha.component';

describe('UpdateCozinhaComponent', () => {
  let component: UpdateCozinhaComponent;
  let fixture: ComponentFixture<UpdateCozinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCozinhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCozinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
