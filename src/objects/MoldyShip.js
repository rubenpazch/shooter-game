// eslint-disable-next-line no-unused-vars
import Phaser from 'phaser';
import Entity from './Entities';
import EnemyLaser from './EnemyLaser';

class MoldyShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprEnemy3', 'MoldyShip');
    this.play('sprEnemy3');
  }

  addShooterEvent() {
    return this.scene.time.addEvent({
      delay: 800,
      callback() {
        const laser = new EnemyLaser(
          this.scene,
          this.x,
          this.y,
        );
        laser.body.velocity.y = 300;
        laser.setScale(this.scaleX);
        this.scene.enemyLasers.add(laser);
      },
      callbackScope: this,
      loop: true,
    });
  }

  onDestroy() {
    if (this.shootTimer !== undefined) {
      if (this.shootTimer) {
        this.shootTimer.remove(false);
      }
    }
  }
}

export default MoldyShip;