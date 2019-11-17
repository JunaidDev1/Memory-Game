import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeAudio } from '@ionic-native/native-audio';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GameLevelsProvider } from '../providers/game-levels/game-levels';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    NativeAudio,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GameLevelsProvider
  ]
})
export class AppModule { }
