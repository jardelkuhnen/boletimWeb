import { Injectable } from '@angular/core';
import { of } from 'rxjs';


export class Menu {
  constructor(public name: string, public path: string) { }
}


@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }


getMenus() {
  return of([
    new Menu('Aluno', 'aluno'),
    new Menu('Professor', 'professor'),
    new Menu('Turma', 'turma'),
    new Menu('Materia', 'materia')
  ]);
}

}
