import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Professor } from '../models/Professor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  
  readonly API = environment;

constructor(
  private http: HttpClient) { }


  getProfessores() {
    return this.http.get<Professor[]>(this.API.SERVICE_PROFESSOR);
  }

}
