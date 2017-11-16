/**
 * @description Constructs the engine of the game
 * @param {CharacterSprite} playerSprite
 * @return {Engine}
 */
var initializeGame = function initializeGame(playerSprite) {
  'use strict';
  var enemies = [
    new Enemy(3, 300, 100, CHARACTER_SPRITE_FACTORY.ENEMY_BUG),
    new Enemy(2, 0, 300, CHARACTER_SPRITE_FACTORY.ENEMY_BUG),
    new Enemy(1, 100, 200, CHARACTER_SPRITE_FACTORY.ENEMY_BUG),
    new Enemy(1, 0, 100, CHARACTER_SPRITE_FACTORY.ENEMY_BUG)
  ];

  var player = new Player(5, 2, playerSprite);
  player.bindKeyBoard();
  return new Engine(enemies, player);
};


/**
 * @description  Calls the bind functions for the characterSelectionModal and gameOverModal
 * @param {CharacterSelectionModalView} characterSelectionModal
 * @param {GameOverModalView} gameOverModal
 */
var bindModals = function bindModals(characterSelectionModal, gameOverModal) {
  characterSelectionModal.bindInitialization(function (playerSprite) {
    var engine = initializeGame(playerSprite);
    engine.setGameOverRunner(gameOverModal.show.bind(gameOverModal));
    engine.init();
  });
  gameOverModal.bindReset();
  gameOverModal.bindCloseModal(characterSelectionModal);
};
