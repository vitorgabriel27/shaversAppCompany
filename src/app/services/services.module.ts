import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { NewServiceComponent } from '../new-service/new-service.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,

  ],
  declarations: [ServicesComponent, NewServiceComponent]
})
export class ServicesComponentModule {}