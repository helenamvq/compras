import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensReadCozinhaComponent } from './itens-read-cozinha.component';

describe('ItensReadCozinhaComponent', () => {
  let component: ItensReadCozinhaComponent;
  let fixture: ComponentFixture<ItensReadCozinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItensReadCozinhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensReadCozinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
