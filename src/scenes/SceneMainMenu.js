import Phaser from 'phaser';
import ScrollingBackground from './ScrollingBackground';


export default class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneMainMenu' });
  }

  preload() {
    this.load.image('sprBg0', 'assets/sprBg0.png');
    this.load.image('sprBg1', 'assets/sprBg1.png');
    this.load.image('deepGalaxy', 'assets/sprBg3.png');
    this.load.image('sprBtnPlayDown', 'assets/sprBtnPlayDown.png');
    this.load.image('sprInfoInstructions', 'assets/sprInfoInstructions.png');
    this.load.audio('sndBtnOver', 'assets/sndBtnOver.wav');
    this.load.audio('sndBtnDown', 'assets/sndBtnDown.wav');
    this.load.audio('sndBgMusic', 'assets/imperial_march.wav');
  }

  create() {
    this.scene.start('SceneWelcome');
  }

  // update() {
  //  for (let i = 0; i < this.backgrounds.length; i += 1) {
  //    this.backgrounds[i].update();
  //  }
  // }
}