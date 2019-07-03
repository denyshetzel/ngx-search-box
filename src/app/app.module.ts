import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxSearchBoxPanelModule } from 'projects/ngx-search-box-panel/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSearchBoxPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
