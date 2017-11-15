var initializeGame = function initializeGame(playerSprite) {
  'use strict';
  var enemies = [
    new Enemy(3, 100, 100, CHARACTER_SPRITE_FACTORY.ENEMY_BUG),
    new Enemy(2, 100, 200, CHARACTER_SPRITE_FACTORY.ENEMY_BUG)
  ];

  var player = new Player(5, 2, playerSprite);
  player.bindKeyBoard();
  var engine = new Engine(enemies, player);

  engine.resetPlayerPosition();
  engine.simulate(Date.now());
};
