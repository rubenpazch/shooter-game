import Phaser from 'phaser';
import Entity from './Entities';
import PlayerLaser from './PlayerLaser';
import sendScore from '../modules/sendScore';

class Player extends Entity {
  constructor(scene, x, y, key) {
    super(scene, x, y, key, 'Player');
    this.setData('speed', 300);
    this.setData('isShooting', false);
    this.setData('timerShootDelay', 10);
    this.setData('timerShootTick', this.getData('timerShootDelay') - 1);
  }

  moveUp() {
    this.body.velocity.y = -this.getData('speed');
  }

  moveDown() {
    this.body.velocity.y = this.getData('speed');
  }

  moveLeft() {
    this.body.velocity.x = -this.getData('speed');
  }

  moveRight() {
    this.body.velocity.x = this.getData('speed');
  }

  update() {
    this.body.setVelocity(0, 0);
    this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
    this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);
    if (this.getData('isShooting')) {
      if (this.getData('timerShootTick') < this.getData('timerShootDelay')) {
        this.setData('timerShootTick', this.getData('timerShootTick') + 1); // every game update, increase timerShootTick by one until we reach the value of timerShootDelay
      } else { // when the "manual timer" is triggered:
        const laser = new PlayerLaser(this.scene, this.x + 25, this.y);
        this.scene.playerLasers.add(laser);
        this.scene.sfx.laser.play(); // play the laser sound effect
        this.setData('timerShootTick', 1);
      }
    }
  }

  onDestroy(objPlayerInfo) {
    this.scene.time.addEvent({ // go to game over scene
      delay: 1000,
      callback() {
        sendScore.postNameScore(objPlayerInfo.getData('name'), objPlayerInfo.getData('score'));
        this.scene.scene.start('SceneGameOver', { score: objPlayerInfo.getData('score') });
      },
      callbackScope: this,
      loop: false,
    });
  }
}

export default Player;