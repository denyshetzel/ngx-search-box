import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgxSearchBoxComponent } from './ngx-search-box/ngx-search-box.component';
import { CommonModule } from '@angular/common';
import { PanelDropdownComponent } from './panel-dropdown/panel-dropdown.component';
import { PortalModule } from '@angular/cdk/portal';

const MATERIAL_MODULES = [
  OverlayModule,
  PortalModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule
]

@NgModule({
  declarations: [NgxSearchBoxComponent, PanelDropdownComponent],
  imports: [
    FormsModule,
    CommonModule,
    MATERIAL_MODULES,
  ],
  exports: [NgxSearchBoxComponent]
})
export class NgxSearchBoxLibModule { }
