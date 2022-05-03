import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarSnackComponent } from './cadastrar-snack.component';

describe('CadastrarSnackComponent', () => {
  let component: CadastrarSnackComponent;
  let fixture: ComponentFixture<CadastrarSnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarSnackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
