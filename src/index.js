import Phaser from 'phaser';
import SceneMainMenu from './scenes/SceneMainMenu';
import SceneMain from './scenes/SceneMain';
import SceneGameOver from './scenes/SceneGameOver';
import SceneWelcome from './scenes/SceneWelcome';

const config = {
  type: Phaser.AUTO,
  width: 780,
  height: 840,
  backgroundColor: 'black',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [
    SceneMainMenu,
    SceneMain,
    SceneWelcome,
    // SceneGameOver,
  ],
  pixelArt: true,
  roundPixels: true,

};

const game = new Phaser.Game(config);
