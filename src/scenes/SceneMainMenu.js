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
    this.load.image('sprBtnPlay', 'assets/sprBtnPlay.png');
    this.load.image('sprBtnBack', 'assets/sprBtnBack.png');
    this.load.image('sprBtnInstructions', 'assets/sprBtnInstructions.png');
    this.load.image('sprBtnAbout', 'assets/sprBtnAbout.png');
    this.load.image('sprBtnPlayHover', 'assets/sprBtnPlayHover.png');
    this.load.image('sprBtnInstructionsHover', 'assets/sprBtnInstructionsHover.png');
    this.load.image('sprBtnAboutHover', 'assets/sprBtnAboutHover.png');
    this.load.image('sprBtnBackHover', 'assets/sprBtnBackHover.png');
    this.load.image('sprBtnPlayDown', 'assets/sprBtnPlayDown.png');
    this.load.image('sprBtnRestart', 'assets/sprBtnRestart.png');
    this.load.image('sprBtnRestartHover', 'assets/sprBtnRestartHover.png');
    this.load.image('sprBtnRestartDown', 'assets/sprBtnRestartDown.png');
    this.load.image('sprInfoInstructions', 'assets/sprInfoInstructions.png');
    this.load.audio('sndBtnOver', 'assets/sndBtnOver.wav');
    this.load.audio('sndBtnDown', 'assets/sndBtnDown.wav');
    this.load.audio('sndBgMusic', 'assets/imperial_march.wav');
  }

  create() {
    this.scene.start('SceneWelcome');
    // this.scene.start('SceneMain');
  }

  // update() {
  //  for (let i = 0; i < this.backgrounds.length; i += 1) {
  //    this.backgrounds[i].update();
  //  }
  // }
}