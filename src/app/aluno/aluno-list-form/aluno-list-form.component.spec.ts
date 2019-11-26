import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoListFormComponent } from './aluno-list-form.component';

describe('AlunoListFormComponent', () => {
  let component: AlunoListFormComponent;
  let fixture: ComponentFixture<AlunoListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
