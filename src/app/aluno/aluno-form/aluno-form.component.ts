import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { switchMap, tap } from "rxjs/operators"

import { Aluno } from 'src/app/models/Aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

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
    private messages: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const alunoId = this.route.snapshot.paramMap.get('id');
    this.getAluno(alunoId);
  }

  private salvarAluno() {
    this.aluno = this.formAluno.value;

    if (!this.aluno.id) {
      this.alunoService.addAluno(this.aluno).subscribe(r => {
        this.router.navigate(['/aluno']);
      }, error => this.showError(error));
      
      return;
    }

    this.alunoService.updateAluno(this.aluno).subscribe(r => {
      this.router.navigate(['/aluno']);
    }, error => this.showError(error));

  }

  private voltar() {
    this.router.navigate(['/aluno']);
  }

  private getAluno(alunoId) {

    if (alunoId == 'id') {
      this.formAluno = this.form.group({
        id: '',
        ra: '',
        nome: '',
        sobreNome: ''
      });
      
      return;
    }

    this.alunoService.getAluno(alunoId).subscribe(dado => {
        console.log(dado);

        this.formAluno = this.form.group({
          id: dado.id,
          ra: dado.ra,
          nome: dado.nome,
          sobreNome: dado.sobreNome
        });
    }, error => this.showError(error));

    this.formAluno = this.form.group({
      id: '',
      ra: '',
      nome: '',
      sobreNome: ''
    });


  }

  showError(message: string) {
    setTimeout(() => this.messages.open(message, 'Close', { duration: 4000 }), 1);
  }

}
