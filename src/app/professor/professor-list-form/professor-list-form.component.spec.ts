import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorListFormComponent } from './professor-list-form.component';

describe('ProfessorListFormComponent', () => {
  let component: ProfessorListFormComponent;
  let fixture: ComponentFixture<ProfessorListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
