import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData, DecimalPipe, CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CpfPipe } from 'src/app/pipes/cpf.pipe';
import { DateBrPipe } from 'src/app/pipes/date-br.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { ErrorsMessagesComponent } from './errors-messages/errors-messages.component';
import { SuccessMessagesComponent } from './success-messages/success-messages.component';
import { CpfDirective } from 'src/app/directives/cpf-directive';


@NgModule({
  declarations: [
    CpfPipe,
    DateBrPipe,
    CpfDirective,
    PaginationComponent,
    ErrorsMessagesComponent,
    SuccessMessagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [

    CpfPipe,
    DateBrPipe,
    CpfDirective,
    PaginationComponent,
    ErrorsMessagesComponent,
    SuccessMessagesComponent
  ]
})
export class SharedComponentsModule { }
