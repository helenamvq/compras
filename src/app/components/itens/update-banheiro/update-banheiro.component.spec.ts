import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBanheiroComponent } from './update-banheiro.component';

describe('UpdateBanheiroComponent', () => {
  let component: UpdateBanheiroComponent;
  let fixture: ComponentFixture<UpdateBanheiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBanheiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBanheiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
