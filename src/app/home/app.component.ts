import { HomeService } from './service/home.service';
import { Component } from '@angular/core';

interface HomeProps {
  count: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numBolao!: number;

  constructor(
    private homeService: HomeService
  ){
    this.homeService.getNumeroBolao().subscribe((response: HomeProps) => {
      console.log(response);
      this.numBolao = response.count;
    });
  }
}
