import { NgModule } from '@angular/core';
import { NgxSearchBoxComponent } from './ngx-search-box.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [NgxSearchBoxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    OverlayModule, 
    MatIconModule,
    MatInputModule, 
    MatCommonModule,
    MatButtonModule, 
    MatFormFieldModule
  ],
  exports: [NgxSearchBoxComponent]
})
export class NgxSearchBoxModule { }
