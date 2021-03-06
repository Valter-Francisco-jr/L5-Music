import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pesquisa } from 'src/app/app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'L5-Music';
  myimage:string = "assets/images/Logo-L5-Music.png";
  imagemusic:string = "assets/images/dynamic-radial-color-sound-equalizer-design-music-album-cover-template-abstract-circular-digital-data-form-vector-160916775.jpg";
  ionicon:string = "assts/images/list-music.png"
  playermusic:string = "assets/images/play-fill.svg"


  public pesquisa: Pesquisa[] = [];
  public form: FormGroup;

  /* input de pesquisa salvando no
  LocalStorage mas sem ir para a pagina de histórico  */

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])]
    });

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

  save() {
    const data = JSON.stringify(this.pesquisa);
    localStorage.setItem('pesquisa', data);
  }

}


