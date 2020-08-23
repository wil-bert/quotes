import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { DetailComponent } from './detail/detail.component';
import { DateCountPipe } from './date-count.pipe';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    DetailComponent,
    DateCountPipe,
    FormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
