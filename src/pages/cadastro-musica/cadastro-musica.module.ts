import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroMusicaPage } from './cadastro-musica';

@NgModule({
  declarations: [
    CadastroMusicaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroMusicaPage),
  ],
})
export class CadastroMusicaPageModule {}
