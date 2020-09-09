import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryTwoComponent } from './secondary-two/secondary-two.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SecondaryTwoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'prefix',
        component: SecondaryTwoComponent,
      },
    ]),
  ]
})
export class Secondary2Module {
}
