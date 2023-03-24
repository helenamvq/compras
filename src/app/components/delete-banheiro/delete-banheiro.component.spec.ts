import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBanheiroComponent } from './delete-banheiro.component';

describe('DeleteBanheiroComponent', () => {
  let component: DeleteBanheiroComponent;
  let fixture: ComponentFixture<DeleteBanheiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBanheiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteBanheiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
