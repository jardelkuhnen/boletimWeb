import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Aluno } from 'src/app/models/Aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit {

  formAluno: FormGroup;
  aluno: Aluno;

  constructor(
    private form: FormBuilder,
    private alunoService: AlunoService,
    private messages: MatSnackBar) { }

  ngOnInit() {
    this.formAluno = this.form.group({
      id: '',
      ra: '',
      nome: '',
      sobreNome: ''
    });
  }

  private saveAluno() {
    this.aluno = this.formAluno.value;

    this.alunoService.addAluno(this.aluno).subscribe(r => {

    }, error => this.showError(error));

  }

  showError(message: string) {
    setTimeout(() => this.messages.open(message, 'Close', { duration: 4000 }), 1);
  }

}
