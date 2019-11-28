import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


import { Aluno } from '../models/Aluno';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


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
    return this.http.post<Aluno>(this.API.SERVICE_ALUNO, aluno);
  }

  updateAluno(aluno: Aluno) {
    return this.http.put<Aluno>(this.API.SERVICE_ALUNO, aluno);
  }

  deleteAluno(alunoId: number) {
    return this.http.delete(this.API.SERVICE_ALUNO + '/' + alunoId);
  }

  getAluno(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(this.API.SERVICE_ALUNO + '/'+ id);
  }
}
