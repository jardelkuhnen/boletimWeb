import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MaterialUIModule } from '../core/material/material-ui.module';

import { MatTableModule } from '@angular/material';
import { ProfessorRouting } from './professor-routing.module';
import { ProfessorListFormComponent } from './professor-list-form/professor-list-form.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialUIModule,
        ProfessorRouting,
        MatTableModule
    ],
    declarations: [
        ProfessorListFormComponent
    ]
})
export class ProfessorModule{}