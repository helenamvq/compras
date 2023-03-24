import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensReadBanheiroComponent } from './itens-read-banheiro.component';

describe('ItensReadBanheiroComponent', () => {
  let component: ItensReadBanheiroComponent;
  let fixture: ComponentFixture<ItensReadBanheiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItensReadBanheiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensReadBanheiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
