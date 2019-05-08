import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { NgxSearchBoxComponent } from './ngx-search-box.component';

@NgModule({
  declarations: [NgxSearchBoxComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [NgxSearchBoxComponent]
})
export class NgxSearchBoxModule { }
