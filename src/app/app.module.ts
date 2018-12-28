import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule } from '@angular/forms';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistService } from '../services/playlist/playlist.service';
import { MusicaPage } from '../pages/musica/musica';
import { CadastroPlaylistPage } from '../pages/cadastro-playlist/cadastro-playlist';
import { MusicaService } from '../services/musica/musica.service';
import { CadastroMusicaPage } from '../pages/cadastro-musica/cadastro-musica';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MusicaPage,
    CadastroPlaylistPage,
    CadastroMusicaPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MusicaPage,
    CadastroPlaylistPage,
    CadastroMusicaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlaylistService,
    MusicaService
  ]
})
export class AppModule {}
