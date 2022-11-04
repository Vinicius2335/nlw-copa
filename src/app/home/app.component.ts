import { HomeService } from './service/home.service';
import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

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
  numPaltites!: number;
  numUsuarios!: number;

  form = this.formBuilder.group({
    title: ['', Validators.required]
  });

  constructor(
    private homeService: HomeService,
    private formBuilder: NonNullableFormBuilder
  ){
    this.refresh();
  }

  refresh(){
    this.getNumBoloes();
    this.getNumPalpites();
    this.getNumUsuarios();
  }

  getNumBoloes(){
    this.homeService.getNumeroBolao().subscribe((response: HomeProps) => {
      this.numBolao = response.count;
    });
  }
  
  getNumPalpites(){
    this.homeService.getNumeroPalpites().subscribe((response: HomeProps) => {
      this.numPaltites = response.count;
    });
  }
  
  getNumUsuarios(){
    this.homeService.getNumeroUsuarios().subscribe((response: HomeProps) => {
      this.numUsuarios = response.count;
    });
  }

  onNovoBolao(){
    if(!this.form.valid){
      alert('Nome do bolão não pode ser vazio');
      return;
    }

    this.homeService.createBolao(this.form.value).subscribe({
      next: (response) => {
        console.log(response);
        const code = response.code;
        navigator.clipboard.writeText(code);
        alert(`Bolão criado com sucesso, o código do bolão é ${code}, e foi copiado para a área de transferência!`);
        this.refresh();
        this.form.reset();
      },
      error: (erro) => {
        console.error(erro);
        alert('Falha ao criar o bolão, tente novamente!');
      }
    });
  }
}
