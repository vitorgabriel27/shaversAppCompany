import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewServiceComponent } from './new-service.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,

  ],
  declarations: [NewServiceComponent]
})
export class NewServiceComponentModule {}