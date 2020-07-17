import Phaser from 'phaser';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';
import SceneMainMenu from './scenes/SceneMainMenu';
import SceneMain from './scenes/SceneMain';
import SceneGameOver from './scenes/SceneGameOver';
import SceneWelcome from './scenes/SceneWelcome';
import SceneInstructions from './scenes/SceneInstructions';
import SceneInputName from './scenes/SceneInputName';
import SceneAbout from './scenes/SceneAbout';
import SceneStageTwo from './scenes/SceneStageTwo';

const config = {
  parent: 'phaser-container',
  dom: {
    createContainer: true,
  },
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
    SceneInstructions,
    SceneInputName,
    SceneGameOver,
    SceneAbout,
    SceneStageTwo,
  ],
  pixelArt: true,
  roundPixels: true,
  plugins: {
    scene: [
      {
        key: 'rexUI',
        plugin: RexUIPlugin,
        mapping: 'rexUI',
      },
    ],
  },
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
