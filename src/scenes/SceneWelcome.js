import Phaser from 'phaser';
import ScrollingBackground from './ScrollingBackground';

class SceneWelcome extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneWelcome' });
  }

  create() {
    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'sprBtnPlay',
    );
    this.btnPlay.setInteractive();

    this.btnPlay.on('pointerover', function () {
      this.btnPlay.setTexture('sprBtnPlayHover'); // set the button texture to sprBtnPlayHover
      //this.sfx.btnOver.play(); // play the button over sound
    }, this);

    this.btnPlay.on('pointerout', function () {
      this.setTexture('sprBtnPlay');
    });

    this.btnPlay.on('pointerdown', function () {
      this.btnPlay.setTexture('sprBtnPlayDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnPlay.on('pointerup', function () {
      this.btnPlay.setTexture('sprBtnPlay');
      this.scene.start('SceneMain');
    }, this);

    this.title = this.add.text(this.game.config.width * 0.5, 128, 'STARS WARS', {
      fontFamily: 'monospace',
      fontSize: 48,
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

export default SceneWelcome;