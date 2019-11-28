import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/Professor';
import { ProfessorService } from 'src/app/services/professor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-list-form',
  templateUrl: './professor-list-form.component.html',
  styleUrls: ['./professor-list-form.component.scss']
})
export class ProfessorListFormComponent implements OnInit {

  professores: Professor[];
  displayedColumns: string[] = ['nome', 'sobreNome', 'acoes'];

  constructor(
    private professorService: ProfessorService,
    private router: Router) { }

  ngOnInit() {
    this.getProfessores();
  }

  private getProfessores() {
    this.professorService.getProfessores();
  }

}
