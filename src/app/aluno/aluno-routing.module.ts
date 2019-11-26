import { Routes, RouterModule } from '@angular/router';
import { AlunoListFormComponent } from './aluno-list-form/aluno-list-form.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: AlunoListFormComponent },
    { path: ':id/aluno', component: AlunoFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlunoRouting {}