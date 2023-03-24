import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensReadSalaComponent } from './itens-read-sala.component';

describe('ItensReadSalaComponent', () => {
  let component: ItensReadSalaComponent;
  let fixture: ComponentFixture<ItensReadSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItensReadSalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensReadSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
