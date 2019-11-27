import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Aluno } from '../models/Aluno';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  readonly API = environment;

  constructor(private http: HttpClient) { }

  getAlunos() {
    return this.http.get<Aluno[]>(this.API.SERVICE_ALUNO);
  }

  addAluno(aluno: Aluno) {
    return this.http.post<Aluno>(this.API.SERVICE_ALUNO, JSON.stringify(aluno));
  }

  updateAluno(aluno: Aluno) {
    return this.http.put<Aluno>(this.API.SERVICE_ALUNO, JSON.stringify(aluno));
  }

  deleteAluno(id: number) {
    return this.http.delete(this.API.SERVICE_ALUNO + id);
  }
}
