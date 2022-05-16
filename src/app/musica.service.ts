import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  musicsUrl = 'http://localhost:3000/musics';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.musicsUrl}`);
  }
}
