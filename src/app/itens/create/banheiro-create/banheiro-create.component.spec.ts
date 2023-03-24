import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanheiroCreateComponent } from './banheiro-create.component';

describe('BanheiroCreateComponent', () => {
  let component: BanheiroCreateComponent;
  let fixture: ComponentFixture<BanheiroCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanheiroCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanheiroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
