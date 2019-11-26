import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/Aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-aluno-list-form',
  templateUrl: './aluno-list-form.component.html',
  styleUrls: ['./aluno-list-form.component.scss']
})
export class AlunoListFormComponent implements OnInit {

  alunos: Aluno[];

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.loadAlunos();
  }

  private loadAlunos() {
    this.alunos = this.alunoService.getAlunos();
  }

}
