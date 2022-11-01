import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private readonly API_URL = 'http://localhost:3333/pools';

  constructor(
    private http: HttpClient
  ) { }

  getNumeroBolao(){
    return this.http.get<any>(this.API_URL + '/count').pipe(first())
  }

}
