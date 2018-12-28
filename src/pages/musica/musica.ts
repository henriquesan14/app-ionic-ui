import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Playlist } from '../../models/playlist';
import { CadastroMusicaPage } from '../cadastro-musica/cadastro-musica';
import { MusicaService } from '../../services/musica/musica.service';
import { Musica } from '../../models/musica';

/**
 * Generated class for the MusicaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-musica',
  templateUrl: 'musica.html',
})
export class MusicaPage {

  public playlist: Playlist = <Playlist>{musicas: []};
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private musicaService: MusicaService) {
  }

  ionViewDidEnter() {
    this.playlist= this.navParams.get('playlist');
    this.getListaMusicas(this.playlist.id);
  }

  getListaMusicas(id: number){
    this.musicaService.getListaMusicas(id)
    .subscribe((musicas: Musica[]) => {this.playlist.musicas = musicas;} , () => {console.log('erro');});
  }

  abreForm(){
    this.navCtrl.push(CadastroMusicaPage, {id:this.playlist.id});
  }

  abreEditarMusica(musica: Musica){ 
    this.navCtrl.push(CadastroMusicaPage, {musica: musica, id: this.playlist.id});
  }

  deletaMusica(id: number, idMusica: number) {
    console.log(id);
    console.log(idMusica);
    const confirm = this.alertCtrl.create({
      title: 'Música: '+id,
      message: 'Tem certeza que deseja apagar esta música?',
      buttons: [
        {
          text: 'SIM',
          handler: () => {
            this.musicaService.deletaMusica(id, idMusica)
              .subscribe(() => {this.getListaMusicas(id);}, () => {console.log('erro');})
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
