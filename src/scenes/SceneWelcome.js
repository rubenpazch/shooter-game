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

  createBtnPlay() {
    const halfScreen = this.game.config.width * 0.5;
    const centerScreen = this.game.config.height * 0.5;
    this.btnPlay = this.add.sprite(halfScreen, centerScreen, 'sprBtnPlay');
    this.btnPlay.setInteractive();

    this.btnPlay.on('pointerover', function btnPlayHover() {
      this.btnPlay.setTexture('sprBtnPlayHover');
      this.sfx.btnOver.play();
    }, this);

    this.btnPlay.on('pointerout', function btnPlayOut() {
      this.setTexture('sprBtnPlay');
    });

    this.btnPlay.on('pointerdown', function btnPlayDown() {
      this.btnPlay.setTexture('sprBtnPlayDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnPlay.on('pointerup', function btnPlayUp() {
      this.btnPlay.setTexture('sprBtnPlay');
      this.scene.start('SceneInputName');
    }, this);
  }

  createBtnInstructions() {
    const halfScreen = this.game.config.width * 0.5;
    const centerScreen = this.game.config.height * 0.5;
    this.btnInstructions = this.add.sprite(
      halfScreen,
      centerScreen + 70,
      'sprBtnInstructions',
    );
    this.btnInstructions.setInteractive();
    this.btnInstructions.on('pointerover', function btnInstructionsOver() {
      this.btnInstructions.setTexture('sprBtnInstructionsHover'); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);
    this.btnInstructions.on('pointerout', function btnInstructionsOut() {
      this.setTexture('sprBtnInstructions');
    });
    this.btnInstructions.on('pointerdown', function btnInstructionsDown() {
      this.btnInstructions.setTexture('sprBtnInstructions');
      this.sfx.btnDown.play();
    }, this);

    this.btnInstructions.on('pointerup', function btnInstructionsUp() {
      this.btnInstructions.setTexture('sprBtnInstructions');
      this.scene.start('SceneInstructions');
    }, this);
  }

  createBtnAbout() {
    const halfScreen = this.game.config.width * 0.5;
    const centerScreen = this.game.config.height * 0.5;
    this.btnAbout = this.add.sprite(
      halfScreen,
      centerScreen + 140,
      'sprBtnAbout',
    );
    this.btnAbout.setInteractive();

    this.btnAbout.on('pointerover', function btnAboutHover() {
      this.btnAbout.setTexture('sprBtnAboutHover'); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);

    this.btnAbout.on('pointerout', function () {
      this.setTexture('sprBtnAbout');
    });
  }

  create() {
    const halfScreen = this.game.config.width * 0.5;
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
      bgMusic: this.sound.add('sndBgMusic'),
    };
    this.sfx.bgMusic.play();
    this.createBtnPlay();
    this.createBtnInstructions();
    this.createBtnAbout();

    this.title = this.add.text(halfScreen, 128, 'STAR WARS', {
      fontFamily: 'monospace',
      fontSize: 35,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.description = this.add.text(halfScreen, 188, 'The Empire Strikes Back 1980', {
      fontFamily: 'monospace',
      fontSize: 25,
      fontStyle: 'bold',
      color: '#ff0044',
      align: 'center',
    });
    this.description.setOrigin(0.5);

    this.episode = this.add.text(halfScreen, 248, 'Episode V', {
      fontFamily: 'monospace',
      fontSize: 25,
      fontStyle: 'bold',
      color: '#ff0044',
      align: 'center',
    });
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