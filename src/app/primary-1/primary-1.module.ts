import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryOneComponent } from './primary-one/primary-one.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PrimaryOneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'prefix',
        component: PrimaryOneComponent,
      },
    ]),
  ]
})
export class Primary1Module { }
