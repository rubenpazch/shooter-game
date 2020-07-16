import Phaser from 'phaser';
import ScrollingBackground from './ScrollingBackground';

class SceneWelcome extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneWelcome' });
  }

  preload() {
    this.load.image('sprBtnPlay', 'assets/sprBtnPlay.png');
    this.load.image('sprBtnInstructions', 'assets/sprBtnInstructions.png');
    this.load.image('sprBtnAbout', 'assets/sprBtnAbout.png');
    this.load.image('sprBtnPlayHover', 'assets/sprBtnPlayHover.png');
    this.load.image('sprBtnInstructionsHover', 'assets/sprBtnInstructionsHover.png');
    this.load.image('sprBtnAboutHover', 'assets/sprBtnAboutHover.png');
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
      bgMusic: this.sound.add('sndBgMusic'),
    };
    this.sfx.bgMusic.play();
    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'sprBtnPlay',
    );
    this.btnInstructions = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height / 2 + 70,
      'sprBtnInstructions',
    );

    this.btnAbout = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height / 2 + 140,
      'sprBtnAbout',
    );
    this.btnPlay.setInteractive();
    this.btnInstructions.setInteractive();
    this.btnAbout.setInteractive();

    this.btnPlay.on('pointerover', function () {
      this.btnPlay.setTexture('sprBtnPlayHover'); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);

    this.btnInstructions.on('pointerover', function () {
      this.btnInstructions.setTexture('sprBtnInstructionsHover'); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);

    this.btnAbout.on('pointerover', function () {
      this.btnAbout.setTexture('sprBtnAboutHover'); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);

    this.btnPlay.on('pointerout', function () {
      this.setTexture('sprBtnPlay');
    });

    this.btnInstructions.on('pointerout', function () {
      this.setTexture('sprBtnInstructions');
    });

    this.btnAbout.on('pointerout', function () {
      this.setTexture('sprBtnAbout');
    });

    this.btnPlay.on('pointerdown', function () {
      this.btnPlay.setTexture('sprBtnPlayDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnPlay.on('pointerup', function () {
      this.btnPlay.setTexture('sprBtnPlay');
      this.scene.start('SceneInputName');
    }, this);

    this.btnInstructions.on('pointerdown', function () {
      this.btnInstructions.setTexture('sprBtnInstructions');
      this.sfx.btnDown.play();
    }, this);

    this.btnInstructions.on('pointerup', function () {
      this.btnInstructions.setTexture('sprBtnInstructions');
      this.scene.start('SceneInstructions');
    }, this);

    this.title = this.add.text(this.game.config.width * 0.5, 128, 'STAR WARS', {
      fontFamily: 'monospace',
      fontSize: 35,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });

    this.description = this.add.text(this.game.config.width * 0.5, 188, 'The Empire Strikes Back 1980', {
      fontFamily: 'monospace',
      fontSize: 25,
      fontStyle: 'bold',
      color: '#ff0044',
      align: 'center',
    });

    this.episode = this.add.text(this.game.config.width * 0.5, 248, 'Episode V', {
      fontFamily: 'monospace',
      fontSize: 25,
      fontStyle: 'bold',
      color: '#ff0044',
      align: 'center',
    });

    this.title.setOrigin(0.5);
    this.description.setOrigin(0.5);
    this.episode.setOrigin(0.5);

    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }
  }
}

export default SceneWelcome;