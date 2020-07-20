# Javascript Shooter Game

Shooter game is a project built using JavaScript and the game engine [Phaser](https://phaser.io/). In order to learn how to build games with Phaser 3 and  Webpack 4 the last version I did follow some tutorials and customize a previous example for building this amazing web application, the goal of this game is to kill different enemies shooting them and after finishing the two stages get a final score compared with other players.


![screenshot](./gifPreview.gif)

## Built With

- HTML
- Javascript
- Webpack 4
- Webpack modules
- Phaser 3
- Jest
- Babel  

## Live Demo

[Live Demo Link](https://phasershootergamejs.herokuapp.com/)


## Getting Started

**Want to check the code and make some changes please .**

Do you want to clone this project please use this command on you terminal

```
git@github.com:rubenpazch/shooter-game.git
```
or

```
https://github.com/rubenpazch/shooter-game.git
```


Webpack is used to compile JavaScript modules. Once installed, you can interface with Webpack either from its CLI or API. If you're still new to Webpack, please read through the core concepts and this comparison to learn why you might use it over the other tools that are out in the community.


Core concepts : [Webpack](https://webpack.js.org/concepts/)

## Instructions to play the game   :video_game:

We have two stages on this game, every stage increase the speed of how fast enemies appear.

### 1st. Welcome Scene

- The welcome scene where everything starts, this is the first windows you will see on the game before you start playing on the game.


![screenshot](./scene1.png)

### 2nd. Add your information

- In the second scene we have the option to add our name to the game and this information will be saved on the applications to track your score.

![screenshot](./scene2.png)


### 3rd. Playing scene

- This is the third and the main scene where we have all the logic for the game, we have our ship and some enemies ship, meteors and others, we can shoot the enemies pressing space. 


![screenshot](./app_screenshot.png)





## How was designed the game

This game was designed thinking on the famous movie star wars, specifically on the movie released on the year 1980 "The Empire Strikes Back", the main idea is about having a shooter and some enemies.

### Genres
  
  FPS: First-person shooters: this game build thinking in one person to be the shooter and increse his score if he is able to kill all ship enemies. 

  With that said, this is a game for one player, the only player has to move around the board and shoot as much as possible enemies, this game is supposed to have different stages, every stage will have different difficulties related with the speed of how enemies appear, how fast they move around in the board vertically, finally we have some enemies with the ability to follow the player.
  
### In-Game Terms

Difficulty:



 Game Over: The player should shoot the ship enemies and as soon as the player is shooted by the enemies the game is over and he have a final score, the game can be restarted.


* Game Mechanics vs Gameplay
  - Movement: this game is based on the use of the keyboard to move around the board and shoot the enemies using space.
  - Shoot: for shooting the enemies the player have to press space.
  - Restart: the player can restart the game again after he is dead.
  - Enemies: they are 3 types of enemies 
    - Static enemies
    - shooter enemies
    - shooter enemies with fast movement
* Score system: every time the player is killed, the game calculate every result and shows on the game over view wich was the higher score.

- Score system: As soon as the player is dead the game will calculate all scores and get the higher and save it for future references.


## Prerequisites

- Webpack 
- NPM 

## Setup

Install NPM

Check that you have node and npm installed

To check if you have Node.js installed, run this command in your terminal:


```
node -v
```

To confirm that you have npm installed you can run this command in your terminal:


```
npm -v
```


## Install

install npm and webpack


```
sudo apt update
sudo apt install npm
```


:Show
Local Installation Webpack

To install the latest release or a specific version, run one of the following commands:

```
npm install --save-dev webpack
npm install --save-dev webpack-cli
```

Global Installation Webpack

The following NPM installation will make webpack available globally:

```
npm install --global webpack
```
Now you can make changes on src files to change the behavior of the application

finally if you want to compile the code run this command

```
npm run start
```

After running the above command you will see in your console like a log of activity if everything is ok you will see something like this:

![screenshot](./server.png)


if you have this in your screen that minds everything is working correctly now you can go to the browser with the next link:

```
http://localhost:8000/
```

## Run test on local

```
npm run test
```



## Authors


👤 **Ruben Paz Chuspe**

- Github: [@rubenpazch](https://github.com/rubenpazch)
- Linkedin: [rubenpch](https://www.linkedin.com/in/rubenpch/)
- Twitter: [chuspepaz](https://twitter.com/ChuspePaz)


## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- We thank microverse inc. for this learning opportunity.
- Build a Space Shooter with Phaser 3 [tutorial](https://learn.yorkcs.com/category/tutorials/gamedev/phaser-3/build-a-space-shooter-with-phaser-3/)
- Beginner’s Guide to Game Mechanics [design a game](https://www.gamedesigning.org/learn/basic-game-mechanics/)
- Creating a Phaser 3 Template – Part 1 [design a game](https://phasertutorials.com/creating-a-phaser-3-template-part-1/)
