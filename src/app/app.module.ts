import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import ptBr from '@angular/common/locales/pt';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DecimalPipe, registerLocaleData } from '@angular/common';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
