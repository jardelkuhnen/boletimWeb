import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MaterialUIModule } from '../core/material/material-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoListFormComponent } from './aluno-list-form/aluno-list-form.component';
import { AlunoRouting } from './aluno-routing.module';


@NgModule({
    imports: [
        CommonModule,
        MaterialUIModule,
        AlunoRouting,
        ReactiveFormsModule,
        MatTableModule
    ],
    declarations: [
        AlunoFormComponent, 
        AlunoListFormComponent
    ]
})
export class AlunoModule{}