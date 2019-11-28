import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { ProfessorListFormComponent } from './professor-list-form/professor-list-form.component';

const routes: Routes = [
    { path: '', component: ProfessorListFormComponent },
    { path: ':id/aluno', component: ProfessorListFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfessorRouting {}