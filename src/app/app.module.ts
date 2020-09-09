import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./primary-1/primary-1.module').then(m => m.Primary1Module),
  },
  {
    // Tag Page
    path: '2',
    loadChildren: () => import('./primary-2/primary-2.module').then(m => m.Primary2Module),
  },
  {
    path: '1',
    outlet: 'secondary',
    loadChildren: () => import('./secondary-1/secondary-1.module').then(m => m.Secondary1Module),
  },
  {
    // Asset Detail Page
    path: '2',
    outlet: 'secondary',
    loadChildren: () => import('./secondary-2/secondary-2.module').then(m => m.Secondary2Module),
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      initialNavigation: true,
      enableTracing: true, // !environment.production,
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
      paramsInheritanceStrategy: 'always',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
