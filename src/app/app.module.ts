import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { HttpClientModule } from '@angular/common/http'

import { registerLocaleData } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import localeRU from '@angular/common/locales/ru';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localeRU);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeaderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru' },
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'RUB'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
