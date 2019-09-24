import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameBoardPage } from './game-board';

@NgModule({
  declarations: [
    GameBoardPage,
  ],
  imports: [
    IonicPageModule.forChild(GameBoardPage),
  ],
})
export class GameBoardPageModule {}
