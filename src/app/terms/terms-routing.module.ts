import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsComponent } from './terms.component';
import { PolicesComponent } from '../polices/polices.component';

const routes: Routes = [
  {
    path: '',
    component: TermsComponent,
  },
  {
    path: 'polices',
    component: PolicesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsComponentRoutingModule {}
