import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryOneComponent } from './secondary-one/secondary-one.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SecondaryOneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'prefix',
        component: SecondaryOneComponent,
      },
    ]),
  ]
})
export class Secondary1Module {
}
