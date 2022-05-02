import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationPageRoutingModule } from './registration-routing.module';

import { RegistrationPage } from './registration.page';
import { TitoloDevskillComponent } from 'src/app/component/titolo-devskill/titolo-devskill.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationPageRoutingModule
  ],
  declarations: [RegistrationPage,TitoloDevskillComponent]
})
export class RegistrationPageModule {}
