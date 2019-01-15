import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Musica } from "../../models/musica";



@Injectable()
export class MusicaService {

    public url = 'http://localhost:8080//playlists';
    constructor(public http: HttpClient) {
    }

    getListaMusicas(id: number): Observable<Musica[]> {
        return this.http.get<Musica[]>(`${this.url}/${id}/musicas`);
    }

    addMusicas(id: number, musica: Musica): Observable<Musica>{
        return this.http.post<Musica>(`${this.url}/${id}/musicas`,musica);
    }

    deletaMusica(id: number, idMusica: number): Observable<Musica> {
        return this.http.delete<Musica>(`${this.url}/${id}/musicas/${idMusica}`);
    } 

}
