import Entity from './Entities';

class PlayerScore extends Entity {
  constructor(scene, x, y, key) {
    super(scene, x, y, key, 'PlayerScoreInfo');
    this.setData('name', 'Luke Skywalker');
    this.setData('score', 0);
  }

  setName(name) {
    this.setData('name', name);
  }
}
export default PlayerScore;