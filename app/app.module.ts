import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { JobCardComponent } from './job-card.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    JobCardComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
