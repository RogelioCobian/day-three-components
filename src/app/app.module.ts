import { WarningClassComponent } from './warning-message/warning-message.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { DangerMessageComponent } from './danger-message/danger-message.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessMessageComponent,
    WarningClassComponent,
    DangerMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
