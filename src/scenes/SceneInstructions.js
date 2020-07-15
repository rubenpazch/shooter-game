import Phaser from 'phaser';
import ScrollingBackground from './ScrollingBackground';

class SceneInstructions extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneInstructions' });
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };
    this.bg = this.add.image(380, 400, 'sprInfoInstructions');

    this.title = this.add.text(this.game.config.width * 0.5, 128, 'STARS WARS', {
      fontFamily: 'monospace',
      fontSize: 35,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });

    this.title.setOrigin(0.5);

    this.btnBack = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height / 2 + 340,
      'sprBtnBack',
    );

    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }
  }
}

export default SceneInstructions;