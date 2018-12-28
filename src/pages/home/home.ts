import { Component} from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Playlist } from '../../models/playlist';
import { PlaylistService } from '../../services/playlist/playlist.service';
import { CadastroPlaylistPage } from '../cadastro-playlist/cadastro-playlist';
import { MusicaPage } from '../musica/musica';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  public playlists: Playlist[];
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, private playlistService: PlaylistService) {
  }

  ionViewDidEnter(){
    this.getListaPlaylists();
  }

  getListaPlaylists(){
    this.playlistService.getListaPlaylists()
    .subscribe((playlists: Playlist[]) => {this.playlists = playlists;}, () => {console.log('erro'); });
  }
  
  abreForm(){
    this.navCtrl.push(CadastroPlaylistPage); 
  }

  abreMusicas(playlist: Playlist){
    this.navCtrl.push(MusicaPage, {playlist: playlist});
  }

  abreEditarPlaylist(playlist: Playlist){
    this.navCtrl.push(CadastroPlaylistPage, {playlist: playlist});
  }

  deletaPlaylist(id: number) {
    const confirm = this.alertCtrl.create({
      title: 'Playlist: '+id,
      message: 'Tem certeza que deseja apagar esta playlist?',
      buttons: [
        {
          text: 'SIM',
          handler: () => {
            this.playlistService.deletaPlaylist(id)
              .subscribe(() => {this.getListaPlaylists();}, () => {console.log('erro');})
          }
        },
        {
          text: 'NÃO',
          handler: () => {
            
          }
        }
      ]
    });
    confirm.present();
  }


}
