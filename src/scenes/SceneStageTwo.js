import Phaser from 'phaser';
import Player from '../objects/Player';
import GunShip from '../objects/GunShip';
import ChaserShip from '../objects/ChaserShip';
import CarrierShip from '../objects/CarrierShip';
import MoldyShip from '../objects/MoldyShip';
import ScrollingBackground from './ScrollingBackground';
import PlayerScore from '../objects/PlayerScore';


export default class SceneStageTwo extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneStageTwo' });
  }

  init(data) {
    this.playerInfo = new PlayerScore(
      this,
      -50,
      -50,
      '',
    );
    this.playerInfo.setData('name', data.name);
    this.playerInfo.setData('score', data.scoreStageOne);
  }

  preload() {
    // this.load.image('sprBg0', 'assets/sprBg0.png');
    // this.load.image('sprBg1', 'assets/sprBg1.png');
    // this.load.image('deepGalaxy', 'assets/sprBg3.png');
    this.bg = this.add.image(440, 600, 'sprBg0');
    this.bg = this.add.image(440, 200, 'sprBg1');
    // this.bg = this.add.image(280, 915, 'deepGalaxy');
    this.load.spritesheet('sprExplosion', 'assets/sprExplosion.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet('sprEnemy0', 'assets/sprEnemy0.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.image('sprEnemy1', 'assets/sprEnemy1.png');
    this.load.spritesheet('sprEnemy2', 'assets/sprEnemy2.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet('sprMeteor', 'assets/sprMeteor.png', {
      frameWidth: 128,
      frameHeight: 128,
    });
    this.load.spritesheet('sprEnemy3', 'assets/sprEnemy3.png', {
      frameWidth: 64,
      frameHeight: 49,
    });
    this.load.image('sprLaserEnemy0', 'assets/sprLaserEnemy0.png');
    this.load.image('sprLaserPlayer', 'assets/sprLaserPlayer.png');
    this.load.image('sprLaserPlayerDual', 'assets/sprLaserPlayerDual.png');
    this.load.spritesheet('sprPlayer', 'assets/sprPlayer.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet('sprPlayerFalcon', 'assets/sprPlayerFalcon.png', {
      frameWidth: 64,
      frameHeight: 64,
    });
    this.load.audio('sndExplode0', 'assets/sndExplode0.wav');
    this.load.audio('sndExplode1', 'assets/sndExplode1.wav');
    this.load.audio('sndLaser', 'assets/sndLaser.wav');
    this.load.audio('sndLaserBlaster', 'assets/blaster-firing.wav');
  }

  createGameIcons() {
    this.anims.create({
      key: 'sprEnemy0',
      frames: this.anims.generateFrameNumbers('sprEnemy0'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'sprEnemy2',
      frames: this.anims.generateFrameNumbers('sprEnemy2'),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: 'sprEnemy3',
      frames: this.anims.generateFrameNumbers('sprEnemy3'),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: 'sprExplosion',
      frames: this.anims.generateFrameNumbers('sprExplosion'),
      frameRate: 20,
      repeat: 0,
    });
    this.anims.create({
      key: 'sprPlayer',
      frames: this.anims.generateFrameNumbers('sprPlayer'),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: 'sprPlayerFalcon',
      frames: this.anims.generateFrameNumbers('sprPlayerFalcon'),
      frameRate: 20,
      repeat: -1,
    });
  }

  setKeyboard() {
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  textPlayerName() {
    this.playerName = this.add.text(20, 20, `Player Name :  ${this.playerInfo.getData('name')}`, {
      fontFamily: 'monospace',
      fontSize: 12,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
  }

  textScorePlayer() {
    this.playerScore = this.add.text(this.playerName.width + 50, 20, `Score :  ${this.playerInfo.getData('score')}`, {
      fontFamily: 'monospace',
      fontSize: 12,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
  }

  textScoreStageTwo() {
    this.playerStage = this.add.text(this.playerName.width + this.playerScore.width + 100, 20, 'Stage 2', {
      fontFamily: 'monospace',
      fontSize: 12,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
  }


  scrollingBackgrounds() {
    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const bg = new ScrollingBackground(this, 'sprBg1', i * 10);
      this.backgrounds.push(bg);
    }
  }

  colliderPlayerToEnemies() {
    this.physics.add.collider(this.playerLasers, this.enemies, (playerLaser, enemy) => {
      if (enemy.active === true) {
        this.playerInfo.setData('score', this.playerInfo.getData('score') + 1);
      }
      if (enemy) {
        if (enemy.onDestroy !== undefined) {
          enemy.onDestroy();
        }
        enemy.explode(true);
        enemy.active = false;
        playerLaser.destroy();
      }
    });
  }

  overlapPlayerToEnemie() {
    this.physics.add.overlap(this.player, this.enemies, (player, enemy) => {
      if (!player.getData('isDead')
          && !enemy.getData('isDead')) {
        player.explode(false);
        enemy.explode(true);
        player.onDestroy(this.playerInfo);
      }
    });
  }

  overlapLaserEnemieToPlayer() {
    this.physics.add.overlap(this.player, this.enemyLasers, (player, laser) => {
      if (!player.getData('isDead')
          && !laser.getData('isDead')) {
        player.explode(false);
        laser.destroy();
        player.onDestroy(this.playerInfo);
      }
    });
  }

  create() {
    const halfScreen = this.game.config.width * 0.5;
    const centerScreen = this.game.config.height * 0.5;

    this.textPlayerName();
    this.textScorePlayer();
    this.textScoreStageTwo();

    this.sfx = {
      explosions: [
        this.sound.add('sndExplode0'),
        this.sound.add('sndExplode1'),
      ],
      laser: this.sound.add('sndLaserBlaster'),
    };
    this.createGameIcons();
    this.setKeyboard();
    this.scrollingBackgrounds();

    this.player = new Player(
      this,
      halfScreen,
      centerScreen,
      'sprPlayerFalcon',
    );
    this.enemies = this.add.group();
    this.enemyLasers = this.add.group();
    this.playerLasers = this.add.group();

    this.colliderPlayerToEnemies();
    this.overlapPlayerToEnemie();
    this.overlapLaserEnemieToPlayer();
    this.addEventTimerEnemies();
  }

  addEventTimerEnemies() {
    const halfScreen = this.game.config.width;
    this.time.addEvent({
      delay: 600,
      callback() {
        let enemy = null;
        const aleatoryElement = Phaser.Math.Between(0, 10);
        const aleatoryXposition = Phaser.Math.Between(0, halfScreen);

        if (aleatoryElement >= 1 && aleatoryElement < 3) {
          enemy = new GunShip(this, aleatoryXposition, 0);
        } else if (aleatoryElement >= 3 && aleatoryElement < 5) {
          if (this.getEnemiesByType('ChaserShip').length < 5) {
            enemy = new ChaserShip(this, aleatoryXposition, 0);
            enemy.body.velocity.y = Phaser.Math.Between(50, 100);
          }
        } else if (aleatoryElement >= 5 && aleatoryElement < 7) {
          if (this.getEnemiesByType('MoldyShip').length < 5) {
            enemy = new MoldyShip(this, aleatoryXposition, 0);
            enemy.body.velocity.y = Phaser.Math.Between(150, 200);
            enemy.shootTimer = enemy.addShooterEvent();
          }
        } else {
          enemy = new CarrierShip(this, aleatoryXposition, 0);
          enemy.body.velocity.y = Phaser.Math.Between(50, 100);
        }
        if (enemy !== null) {
          enemy.setScale(Phaser.Math.Between(10, 15) * 0.1);
          this.enemies.add(enemy);
        }
      },
      callbackScope: this,
      loop: true,
    });
  }

  update() {
    this.player.update();
    if (this.keyW.isDown) {
      this.player.moveUp();
    } else if (this.keyS.isDown) {
      this.player.moveDown();
    }

    if (this.keyA.isDown) {
      this.player.moveLeft();
    } else if (this.keyD.isDown) {
      this.player.moveRight();
    }

    this.playerScore.text = `Score :  ${this.playerInfo.getData('score')}`;

    for (let i = 0; i < this.enemies.getChildren().length; i += 1) {
      const enemy = this.enemies.getChildren()[i];
      enemy.update();
      if (enemy.x < -enemy.displayWidth
        || enemy.x > this.game.config.width + enemy.displayWidth
        || enemy.y < -enemy.displayHeight * 4
        || enemy.y > this.game.config.height + enemy.displayHeight) {
        if (enemy) {
          if (enemy.onDestroy !== undefined) {
            enemy.onDestroy();
          }
          enemy.destroy();
        }
      }
    }
    for (let i = 0; i < this.enemyLasers.getChildren().length; i += 1) {
      const laser = this.enemyLasers.getChildren()[i];
      laser.update();
      if (laser.x < -laser.displayWidth
        || laser.x > this.game.config.width + laser.displayWidth
        || laser.y < -laser.displayHeight * 4
        || laser.y > this.game.config.height + laser.displayHeight) {
        if (laser) {
          laser.destroy();
        }
      }
    }
    for (let i = 0; i < this.playerLasers.getChildren().length; i += 1) {
      const laser = this.playerLasers.getChildren()[i];
      laser.update();
      if (laser.x < -laser.displayWidth
        || laser.x > this.game.config.width + laser.displayWidth
        || laser.y < -laser.displayHeight * 4
        || laser.y > this.game.config.height + laser.displayHeight) {
        if (laser) {
          laser.destroy();
        }
      }
    }
    if (this.keySpace.isDown) {
      this.player.setData('isShooting', true);
    } else {
      this.player.setData('timerShootTick', this.player.getData('timerShootDelay') - 1);
      this.player.setData('isShooting', false);
    }

    if (!this.player.getData('isDead')) {
      this.player.update();
      if (this.keyW.isDown) {
        this.player.moveUp();
      } else if (this.keyS.isDown) {
        this.player.moveDown();
      }
      if (this.keyA.isDown) {
        this.player.moveLeft();
      } else if (this.keyD.isDown) {
        this.player.moveRight();
      }
      if (this.keySpace.isDown) {
        this.player.setData('isShooting', true);
      } else {
        this.player.setData('timerShootTick', this.player.getData('timerShootDelay') - 1);
        this.player.setData('isShooting', false);
      }
    }
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }

  getEnemiesByType(type) {
    const arr = [];
    for (let i = 0; i < this.enemies.getChildren().length; i += 1) {
      const enemy = this.enemies.getChildren()[i];
      if (enemy.getData('type') === type) {
        arr.push(enemy);
      }
    }
    return arr;
  }
}
