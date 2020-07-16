import Phaser from 'phaser';
import ScrollingBackground from './ScrollingBackground';
import PlayerScore from '../objects/PlayerScore';

const COLOR_LIGHT = 0x7b5e57;

class SceneInputName extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneInputName' });
  }

  preload() {
    this.load.image('sprBtnBack', 'assets/sprBtnBack.png');
    this.load.image('sprBtnBackHover', 'assets/sprBtnBackHover.png');
    this.load.image('sprBtnStart', 'assets/sprBtnStart.png');
    this.load.image('sprBtnStartHover', 'assets/sprBtnStartHover.png');
  }

  create() {
    const halfScreen = this.game.config.width * 0.5;
    const playerInfo = new PlayerScore(
      this,
      -10,
      -10,
      '',
    );
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    this.title = this.add.text(halfScreen, 128, 'STAR WARS', {
      fontFamily: 'monospace',
      fontSize: 35,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);


    let username = 'Type your name';
    this.textName = this.rexUI.add.roundRectangle(halfScreen, 400, 400, 40, 5).setStrokeStyle(2, COLOR_LIGHT);
    this.textName = this.rexUI.add.BBCodeText(halfScreen - 50, 340, username, { fixedWidth: 150, fixedHeight: 36, valign: 'center' });
    this.textName = this.add.text(halfScreen, 400, 'Your Name : Jonh Smith', {
      fontFamily: 'monospace',
      fontSize: 25,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });

    this.textName.setOrigin(0.5);

    this.textName.setInteractive().on('pointerdown', () => {
      const configInput = {
        onTextChanged(textObject, text) {
          username = text;
          textObject.text = text;
          if (username !== undefined) {
            playerInfo.setData('name', username);
          }
        },
      };
      this.rexUI.edit(this.textName, configInput);
    });

    this.btnStart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height / 2 + 240,
      'sprBtnStart',
    );
    this.btnStart.setInteractive();

    this.btnStart.on('pointerover', function () {
      this.btnStart.setTexture('sprBtnStartHover'); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);

    this.btnStart.on('pointerout', function () {
      this.setTexture('sprBtnStart');
    });

    this.btnStart.on('pointerdown', function () {
      this.btnStart.setTexture('sprBtnStart');
      this.sfx.btnDown.play();
    }, this);

    this.btnStart.on('pointerup', function () {
      this.btnStart.setTexture('sprBtnStart');
      this.scene.start('SceneMain', { name: playerInfo.getData('name') });
    }, this);


    this.btnBack = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height / 2 + 340,
      'sprBtnBack',
    );
    this.btnBack.setInteractive();

    this.btnBack.on('pointerover', function () {
      this.btnBack.setTexture('sprBtnBackHover'); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);

    this.btnBack.on('pointerout', function () {
      this.setTexture('sprBtnBack');
    });

    this.btnBack.on('pointerdown', function () {
      this.btnBack.setTexture('sprBtnBack');
      this.sfx.btnDown.play();
    }, this);

    this.btnBack.on('pointerup', function () {
      this.btnBack.setTexture('sprBtnBack');
      this.scene.start('SceneWelcome');
    }, this);

    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }
  }
}

export default SceneInputName;