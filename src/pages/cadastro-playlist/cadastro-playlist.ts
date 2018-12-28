import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Playlist } from '../../models/playlist';
import { PlaylistService } from '../../services/playlist/playlist.service';
import { HomePage } from '../home/home';

/**
 * Generated class for the CadastroPlaylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-playlist',
  templateUrl: 'cadastro-playlist.html',
})
export class CadastroPlaylistPage {

  public playlist: Playlist = <Playlist>{};
  public titulo: string;
  public btn: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private playlistService: PlaylistService) {
  }
  
  ionViewDidEnter(){
    if(this.navParams.get('playlist') === undefined){
      this.titulo = 'Nova Playlist';
      this.btn = 'Cadastrar';
    }else{
      this.playlist = this.navParams.get('playlist');
      this.titulo = 'Editar Playlist';
      this.btn = 'Atualizar';
    }
  }

  adiciona(){
    this.playlistService.addPlaylist(this.playlist)
    .subscribe(() => {this.navCtrl.popToRoot();}, () => {console.log('erro');});
  }

}
