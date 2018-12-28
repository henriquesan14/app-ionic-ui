import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPlaylistPage } from './cadastro-playlist';

@NgModule({
  declarations: [
    CadastroPlaylistPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroPlaylistPage),
  ],
})
export class CadastroPlaylistPageModule {}
