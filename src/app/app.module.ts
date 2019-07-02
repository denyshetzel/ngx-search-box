import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSearchBoxModule } from 'projects/ngx-search-box/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    NgxSearchBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
