import Phaser from 'phaser';
import ScrollingBackground from './ScrollingBackground';
import showRanking from '../modules/showRanking';


export default class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneGameOver' });
  }

  init(data) {
    this.resultScore = data;
  }

  preload() {
    this.load.image('sprBtnRestart', 'assets/sprBtnRestart.png');
    this.load.image('sprBtnRestartHover', 'assets/sprBtnRestartHover.png');
    this.load.image('sprBtnRestartDown', 'assets/sprBtnRestartDown.png');
  }

  create() {
    const halfScreen = this.game.config.width * 0.5;
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    let higher = 0;
    showRanking.getAllScores().then((value) => {
      higher = value.result[0].score;
      value.result.forEach(element => {
        if (element.score > higher) {
          higher = element.score;
        }
      });
      this.higherScore = this.add.text(halfScreen, 300, `Higher score was :  ${higher}`, {
        fontFamily: 'monospace',
        fontSize: 17,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center',
      });
      this.higherScore.setOrigin(0.5);
      this.btnRestart = this.add.sprite(
        this.game.config.width * 0.5,
        this.game.config.height * 0.5,
        'sprBtnRestart',
      );
      this.btnRestart.setInteractive();

      this.btnRestart.on('pointerover', function () {
        this.btnRestart.setTexture('sprBtnRestartHover'); // set the button texture to sprBtnPlayHover
        this.sfx.btnOver.play(); // play the button over sound
      }, this);

      this.btnRestart.on('pointerout', function () {
        this.setTexture('sprBtnRestart');
      });

      this.btnRestart.on('pointerdown', function () {
        this.btnRestart.setTexture('sprBtnRestartDown');
        this.sfx.btnDown.play();
      }, this);

      this.btnRestart.on('pointerup', function () {
        this.btnRestart.setTexture('sprBtnRestart');
        this.scene.start('SceneMain');
      }, this);
    });

    this.playerScore = this.add.text(halfScreen, 350, `Your score was :  ${this.resultScore.score}`, {
      fontFamily: 'monospace',
      fontSize: 17,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.playerScore.setOrigin(0.5);

    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}