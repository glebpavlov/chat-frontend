import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ReactiveFormsModule } from '@angular/forms';
import { RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';


@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    InputSwitchModule,
    ReactiveFormsModule
  ],
  providers: [{provide: RECAPTCHA_V3_SITE_KEY, useValue: '6LfpeG0aAAAAAO8bi84v1ujmzCQ76N9r8MrGLn2N'}],
})
export class RegistrationModule {
}
