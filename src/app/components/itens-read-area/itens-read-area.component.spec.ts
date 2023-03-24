import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensReadAreaComponent } from './itens-read-area.component';

describe('ItensReadAreaComponent', () => {
  let component: ItensReadAreaComponent;
  let fixture: ComponentFixture<ItensReadAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItensReadAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensReadAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
