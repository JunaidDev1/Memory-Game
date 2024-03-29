import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameLevelsProvider } from '../../providers/game-levels/game-levels';
import { NativeAudio } from '@ionic-native/native-audio';
import { HomePage } from '../home/home';


/**
 * Generated class for the GameBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-board',
  templateUrl: 'game-board.html',
})
export class GameBoardPage {

  flipped = [];
  currentOpened: any;
  score = 0;
  levelCleared = false;
  levelFailed = false;
  showCount = false;
  public boxes = [];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: GameLevelsProvider,
    private nativeAudio: NativeAudio) {
    this.boxes = service.selectedLevel;
    this.resetGame();
    this.getSounds();
  }


  getSounds() {
    this.nativeAudio.preloadSimple('flipSound', 'assets/imgs/sounds/flip-sound.mp3').then(() => { })
      .catch((e) => {
        console.log(e);
      })
    this.nativeAudio.preloadSimple('win', 'assets/imgs/sounds/win-applause.mp3').then(() => { })
      .catch((e) => {
        console.log(e);
      })
    this.nativeAudio.preloadSimple('lost', 'assets/imgs/sounds/lose-laugh.mp3').then(() => { })
      .catch((e) => {
        console.log(e);
      })
  }

  resetGame() {
    this.levelCleared = false;
    this.levelFailed = false;
    this.score = 0;
    this.currentOpened = "";
    this.flipped = [];
    this.shuffle(this.boxes);
    for (var i = 0; i < this.boxes.length; i++) {
      this.boxes[i].isCovered = false;
    }
    setTimeout(() => {
      this.showCount = true;
    }, 1000);
    setTimeout(() => {
      this.showCount = false;
      this.hideBoxes();
    }, 4500);
  }

  hideBoxes() {
    for (var i = 0; i < this.boxes.length; i++) {
      this.boxes[i].isCovered = true;
    }
  }


  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }


  openBox(box) {
    if (box.isCovered == true) {
      box.isCovered = false;
      this.nativeAudio.play('flipSound').then(() => { })
        .catch((e) => {
          console.log(e);
        })
      this.flipped.push(box);
      if (this.flipped.length == 1 || this.currentOpened == "") {
        this.currentOpened = box;
      }
      else {
        if (this.currentOpened.name == box.name) {
          if (this.flipped.length < this.boxes.length) {
            this.score = this.score + 10;
            this.currentOpened = "";
          }
          else {
            this.score = this.score + 10;
            setTimeout(() => {
              this.levelCleared = true;
            }, 1000);
            this.nativeAudio.play('win').then(() => { })
              .catch((e) => {
                console.log(e);
              })
          }
        }
        else {
          setTimeout(() => {
            this.nativeAudio.play('lost').then(() => {
              setTimeout(() => {
                this.nativeAudio.stop('lost').then();
              }, 2000);
            })
              .catch((e) => {
                console.log(e);
              })
            this.levelFailed = true;
          }, 1000);
        }
      }
    }
  }

  exitGame() {
    this.navCtrl.setRoot(HomePage);
  }


}
