import Phaser from 'phaser';
import ScrollingBackground from './ScrollingBackground';

class SceneAbout extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneAbout' });
  }

  preload() {
    this.load.image('sprBtnBack', 'assets/sprBtnBack.png');
    this.load.image('sprBtnBackHover', 'assets/sprBtnBackHover.png');
    this.load.image('sprHistory', 'assets/history.png');
  }

  createBtnBack() {
    const halfScreen = this.game.config.width * 0.5;
    const centerScreen = this.game.config.height * 0.5;
    this.btnBack = this.add.sprite(
      halfScreen,
      centerScreen + 340,
      'sprBtnBack',
    );
    this.btnBack.setInteractive();

    this.btnBack.on('pointerover', function fnBtnBackOver() {
      this.btnBack.setTexture('sprBtnBackHover'); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);

    this.btnBack.on('pointerout', function fnBtnBackOut() {
      this.setTexture('sprBtnBack');
    });

    this.btnBack.on('pointerdown', function fnBtnBackDown() {
      this.btnBack.setTexture('sprBtnBack');
      this.sfx.btnDown.play();
    }, this);

    this.btnBack.on('pointerup', function fnBtnBackUp() {
      this.btnBack.setTexture('sprBtnBack');
      this.scene.start('SceneWelcome');
    }, this);
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };
    this.createBtnBack();
    this.bg = this.add.image(380, 400, 'sprHistory');
    this.bg.setScale(0.3);

    this.title = this.add.text(this.game.config.width * 0.5, 128, 'STARS WARS', {
      fontFamily: 'monospace',
      fontSize: 35,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });

    this.title.setOrigin(0.5);

    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }
  }
}

export default SceneAbout;