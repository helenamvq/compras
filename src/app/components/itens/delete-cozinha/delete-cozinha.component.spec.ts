import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCozinhaComponent } from './delete-cozinha.component';

describe('DeleteCozinhaComponent', () => {
  let component: DeleteCozinhaComponent;
  let fixture: ComponentFixture<DeleteCozinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCozinhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCozinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
