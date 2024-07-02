import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Card } from './models/card';
import { Service } from './services/service';
import { SharedModule } from './shared/shared/shared.module';

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
  public filtro: string = '';

  constructor(private service: Service) {}

  ngOnInit() {
    this.buscarTodosCards();
  }

  buscarTodosCards() {
    this.service.listarItens().subscribe(res => this.cards = res);
  }

  filtrar(event: any) {
    let filtro = event.target.value
    let filtrado: Card[] = [];
    if(filtro == "") {
      this.buscarTodosCards();
      return
    }
    filtrado = this.cards.filter((card)=>{
      return(
        card.title.toLocaleLowerCase().indexOf(filtro.toLocaleLowerCase()) > -1 || 
        card.description.toLocaleLowerCase().indexOf(filtro.toLocaleLowerCase()) > -1
      )
    });
    this.cards = filtrado;
  }

  excluirCard(index: number) {
    this.cards.splice(index, 1)
  }
}


