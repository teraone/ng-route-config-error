import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryTwoComponent } from './primary-two/primary-two.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PrimaryTwoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'prefix',
        component: PrimaryTwoComponent,
      },
    ]),
  ]
})
export class Primary2Module {
}
