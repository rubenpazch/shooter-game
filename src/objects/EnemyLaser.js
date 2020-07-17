import Entity from './Entities';

class EnemyLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprLaserEnemy0');
  }
}

export default EnemyLaser;