import 'phaser';
import config from './config';
import GameScene from './GameScene';
 
class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Game', GameScene);
    this.scene.start('Game');
  }
}
 
window.game = new Game();