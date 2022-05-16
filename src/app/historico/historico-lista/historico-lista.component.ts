import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Pesquisa } from 'src/app/app.module';


@Component({
  selector: 'app-historico-lista',
  templateUrl: './historico-lista.component.html',
  styleUrls: ['./historico-lista.component.scss']
})
export class HistoricoListaComponent implements OnInit {

  /* Aqui temos um exemplo de como vai ficar
  o historico da pesquisa na página */

  public pesquisa: Pesquisa[] = [];
  public form: FormGroup;


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])]
    });
    this.pesquisa.push(new Pesquisa('Exemplo'));

  }

  add() {
    const title = this.form.controls['title'].value;
    const id = this.pesquisa.length + 1;
    this.pesquisa.push(new Pesquisa(title));
    this.save();
    this.clear();
  }

  clear() {
    this.form.reset();
  }

  remove(pesquisa: Pesquisa) {
    const index = this.pesquisa.indexOf(pesquisa);
    if(index !== -1) {
      this.pesquisa.splice(index, 1);
    }
  }

  save() {
    const data = JSON.stringify(this.pesquisa);
    localStorage.setItem('pesquisa', data);
  }

  ngOnInit(): void {
  }


}
