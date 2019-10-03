import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GameLevelsProvider } from '../../providers/game-levels/game-levels';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public service: GameLevelsProvider) {

  }

  toGameBoard(level) {
    if (level == 'easy') {
      this.service.selectedLevel = this.service.easyBoxes;
    }
    if (level == 'medium') {
      this.service.selectedLevel = this.service.mediumBoxes;
    }
    if (level == 'hard') {
      this.service.selectedLevel = this.service.hardBoxes;
    }
    this.navCtrl.push('GameBoardPage');
  }

}
