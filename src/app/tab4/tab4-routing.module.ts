import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab4Page } from './tab4.page';
import { InfoComponent } from '../info/info.component';
import { TermsComponent } from '../terms/terms.component';
import { PixComponent } from '../pix/pix.component';
import { AdressComponent } from '../adress/adress.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ServicesComponent } from '../services/services.component';
import { EditInfoComponent } from '../edit-info/edit-info.component';
import { PolicesComponent } from '../polices/polices.component';
import { NewServicesComponent } from '../new-services/new-services.component';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page,
  },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'edit-info',
    component: EditInfoComponent,
  },
  {
    path: 'terms',
    component: TermsComponent,
  },
  {
    path: 'terms/polices',
    component: PolicesComponent,
  },
  {
    path: 'pix',
    component: PixComponent,
  },
  {
    path: 'adress',
    component: AdressComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'services/new-services',
    component: NewServicesComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4PageRoutingModule {}
