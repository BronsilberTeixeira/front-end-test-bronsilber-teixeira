import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Card } from "../models/card";

@Injectable({
    providedIn: 'root',
})

export class Service {
    constructor(private http: HttpClient) {}

    listarItens(): Observable<Card[]> {
        return this.http.get<Card[]>('https://githubanotaai.github.io/frontend-interview-mock-data/cardlist.json');
    }
}