import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../truncate.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  declarations: [TruncatePipe],
  imports: [
    CommonModule,
    HttpClientModule, 
    ReactiveFormsModule, 
    MatCardModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatInputModule,
  ],
  exports: [
    TruncatePipe,
    HttpClientModule, 
    ReactiveFormsModule, 
    MatCardModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatInputModule,
    MatTooltipModule
  ]
})
export class SharedModule { }
