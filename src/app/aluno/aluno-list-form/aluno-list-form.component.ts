import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/Aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-list-form',
  templateUrl: './aluno-list-form.component.html',
  styleUrls: ['./aluno-list-form.component.scss']
})
export class AlunoListFormComponent implements OnInit {

  alunos: Aluno[];
  displayedColumns: string[] = ['nome', 'sobreNome', 'acoes'];

  constructor(
    private alunoService: AlunoService, 
    private router: Router) { }

  ngOnInit() {
    this.loadAlunos();
  }

  private loadAlunos() {
    this.alunoService.getAlunos().subscribe(dados => this.alunos = dados);
  }

  private excluir(id: number) {
    this.alunoService.deleteAluno(id);
    this.router.navigate(['/aluno']);
  }
  

}
