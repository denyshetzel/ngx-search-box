import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { NgxSearchBoxComponent } from './ngx-search-box.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [NgxSearchBoxComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [NgxSearchBoxComponent]
})
export class NgxSearchBoxModule { }
