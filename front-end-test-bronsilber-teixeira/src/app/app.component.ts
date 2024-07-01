import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CommonModule } from '@angular/common';
import { Card } from './models/card';
import { Service } from './services/service';
import { SharedModule } from './shared/shared/shared.module';
import { TruncatePipe } from './shared/truncate.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SharedModule],
  providers:[Service],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'front-end-test-bronsilber-teixeira';

  public cards: Card[] = [];

  constructor(private service: Service) {}

  ngOnInit() {
    this.buscarTodosCards();
  }

  buscarTodosCards() {
    this.service.listarItens().subscribe(res => this.cards = res);
  }
}


