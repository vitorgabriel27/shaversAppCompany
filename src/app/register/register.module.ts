import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { RegisterRoutingModule } from './register-routing.module';
import { AddInfoComponent } from './add-info/add-info.component';
import { AddAvailableComponent } from './add-available/add-available.component';
import { AddBinfoComponent } from './add-binfo/add-binfo.component';
import { AddPixComponent } from './add-pix/add-pix.component';
import { AddAdressComponent } from './add-adress/add-adress.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { VerifyComponent } from './verify/verify.component';
import { InitComponent } from './init/init.component';





@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RegisterRoutingModule,
    RouterModule,
    NgxSliderModule
    
  ],
  declarations: [
    AddInfoComponent,
    AddAdressComponent,
    AddProfileComponent,
    VerifyComponent,
    InitComponent,
    AddBinfoComponent,
    AddAvailableComponent,
    AddPixComponent
  ]
})
export class RegisterModule {}
