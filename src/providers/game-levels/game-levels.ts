import { Injectable } from '@angular/core';

/*
  Generated class for the GameLevelsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GameLevelsProvider {

  public selectedLevel: any;


  easyBoxes = [
    {
      boxImage: "./assets/imgs/matches/block.png",
      name: "block",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/pikachu.png",
      name: "pikachu",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/angry.png",
      name: "angry",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/ball.png",
      name: "ball",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/block.png",
      name: "block",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/pikachu.png",
      name: "pikachu",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/angry.png",
      name: "angry",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/ball.png",
      name: "ball",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
  ]

  mediumBoxes = [
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

  hardBoxes = [
    {
      boxImage: "./assets/imgs/matches/facebook.png",
      name: "facebook",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/facebook.png",
      name: "facebook",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/insta.png",
      name: "insta",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/insta.png",
      name: "insta",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/whatsapp.png",
      name: "whatsapp",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/whatsapp.png",
      name: "whatsapp",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/skype.png",
      name: "skype",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/skype.png",
      name: "skype",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/youtube.png",
      name: "youtube",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/youtube.png",
      name: "youtube",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/snapchat.png",
      name: "snapchat",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
    {
      boxImage: "./assets/imgs/matches/snapchat.png",
      name: "snapchat",
      isCovered: false,
      coverImg: "./assets/imgs/mainBg.png"
    },
  ]

  constructor() {
    console.log('Hello GameLevelsProvider Provider');
  }

}
