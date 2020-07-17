import Entity from './Entities';

class CarrierShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprMeteor', 'CarrierShip');
    this.play('sprMeteor');
  }
}

export default CarrierShip;