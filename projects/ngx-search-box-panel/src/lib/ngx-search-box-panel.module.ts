import { NgModule } from '@angular/core';
import { NgxSearchBoxPanelComponent } from './ngx-search-box-panel.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MATERIAL_MODULES = [
  OverlayModule, 
  MatInputModule,
  MatButtonModule,
  MatInputModule, 
  MatIconModule,
  MatButtonModule, 
  MatFormFieldModule
]

@NgModule({
  declarations: [NgxSearchBoxPanelComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MATERIAL_MODULES
  ],
  exports: [NgxSearchBoxPanelComponent]
})
export class NgxSearchBoxPanelModule { }
