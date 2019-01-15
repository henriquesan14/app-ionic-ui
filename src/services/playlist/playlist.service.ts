import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Playlist } from "../../models/playlist";


@Injectable()
export class PlaylistService {

    public url = 'http://localhost:8080/playlists';
    constructor(public http: HttpClient) {
    }

    getListaPlaylists(): Observable<Page[]> {
        return this.http.get<Playlist[]>(this.url);
    }

    getFiltroPlaylists(nome: string): Observable<Page[]> {
        const url = `${this.url}/nome?nome=${nome}`;
        return this.http.get<Page[]>(url);
    }

    addPlaylist(playlist: Playlist): Observable<Playlist>{
        return this.http.post<Playlist>(this.url,playlist);
    }

    deletaPlaylist(id: number): Observable<Playlist> {
        const url = `${this.url}/${id}`;
        return this.http.delete<Playlist>(url);
      }

}
