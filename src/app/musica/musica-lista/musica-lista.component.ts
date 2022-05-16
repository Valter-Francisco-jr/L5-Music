import { MusicaService } from './../../musica.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musica-lista',
  templateUrl: './musica-lista.component.html',
  styleUrls: ['./musica-lista.component.scss']
})
export class MusicaListaComponent implements OnInit {

  imagemusic:string = "/assets/images/oembaixador.webp";
  ionicon:string = "assts/images/list-music.png";
  playermusic:string = "assets/images/play-fill.svg";
  capaMusics:string = "assets/images/capamusicas.png";

  musics: Array<any> = [];

  constructor(private musicaService: MusicaService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar( ){
    this.musicaService.listar().subscribe(dados => this.musics = dados);

  }

}
