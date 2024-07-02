import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TruncatePipe } from '../truncate.pipe';



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
    MatBadgeModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [
    TruncatePipe,
    HttpClientModule, 
    ReactiveFormsModule, 
    MatCardModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatInputModule,
    MatTooltipModule,
    MatBadgeModule,
    FormsModule,
    MatButtonModule
  ]
})
export class SharedModule { }
