import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';
import { NewServiceComponent } from '../new-service/new-service.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
  },
  {
    path: 'new-service',
    component: NewServiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesComponentRoutingModule {}
