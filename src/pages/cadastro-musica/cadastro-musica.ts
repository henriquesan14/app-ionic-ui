import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Musica } from '../../models/musica';
import { MusicaService } from '../../services/musica/musica.service';

/**
 * Generated class for the CadastroMusicaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-musica',
  templateUrl: 'cadastro-musica.html',
})
export class CadastroMusicaPage {

  public musica: Musica = <Musica>{playlist: {}}; 
  public btn: string;
  public id: number;
  public title: string = "Nova Musica";
  constructor(public navCtrl: NavController, public navParams: NavParams, private musicaService: MusicaService) {
  }

  ionViewDidLoad() { 
    if(this.navParams.get('musica') === undefined){ 
      this.id =this.navParams.get('id');
      this.title = "Nova Música";
      this.btn = 'Cadastrar';
    }else{
      this.musica = this.navParams.get('musica');
      this.id =this.navParams.get('id');
      this.title = "Editar Música";
      this.btn = 'Atualizar';
    }
  }

  adiciona(){
    
    this.musicaService.addMusicas(this.id, this.musica)
    .subscribe(() => {this.navCtrl.pop()}, () => {console.log('erro');})
  }


}
