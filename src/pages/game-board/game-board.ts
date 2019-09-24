import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  boxes = [
    {
      boxImage: "./assets/imgs/matches/apple.png",
      name: "apple",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/cat.png",
      name: "cat",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/footbal.png",
      name: "footbal",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/dragon.png",
      name: "dragon",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/flower.png",
      name: "flower",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/apple.png",
      name: "apple",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/shirt.png",
      name: "shirt",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/dragon.png",
      name: "dragon",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/cat.png",
      name: "cat",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/footbal.png",
      name: "footbal",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/shirt.png",
      name: "shirt",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/flower.png",
      name: "flower",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
  ]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.resetGame();
  }


  resetGame() {
    this.shuffle(this.boxes);
    for (var i = 0; i < 12; i++) {
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
    for (var i = 0; i < 12; i++) {
      this.boxes[i].isCovered = true;
    }
    this.levelCleared = false;
    this.levelFailed = false;
    this.score = 0;
    this.currentOpened = "";
    this.flipped = [];
  }


  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }


  openBox(box) {
    if (box.isCovered == false) {
      return;
    }
    else {
      box.isCovered = false;
      this.flipped.push(box);
      if (this.flipped.length == 1 || this.currentOpened == "") {
        this.currentOpened = box;
      }
      else {
        if (this.currentOpened.name == box.name) {
          if (this.flipped.length < 12) {
            this.score = this.score + 10;
            this.currentOpened = "";
          }
          else {
            this.score = this.score + 10;
            this.levelCleared = true;
          }
        }
        else {
          setTimeout(() => {
            this.levelFailed = true;
          }, 1000);
        }
      }
    }
  }

  reloadGame() {
    this.navCtrl.setRoot(HomePage);
  }


}
