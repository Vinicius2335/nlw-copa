import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly API_URL = 'http://localhost:3333';

  constructor(private http: HttpClient) {}

  getNumeroBolao() {
    return this.http.get<any>(this.API_URL + '/pools/count').pipe(first());
  }

  getNumeroUsuarios() {
    return this.http.get<any>(this.API_URL + '/users/count').pipe(first());
  }

  getNumeroPalpites() {
    return this.http.get<any>(this.API_URL + '/guesses/count').pipe(first());
  }

  createBolao(bolao: any) {
    return this.http.post<any>(this.API_URL + '/pools', bolao).pipe(tap(console.log), first());
  }
}
