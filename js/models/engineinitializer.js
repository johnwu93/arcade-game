/**
 *
 * @param {CharacterSprite} playerSprite
 * @return {Engine}
 */
var initializeGame = function initializeGame(playerSprite) {
  'use strict';
  var enemies = [
    new Enemy(3, 100, 100, CHARACTER_SPRITE_FACTORY.ENEMY_BUG),
    new Enemy(2, 100, 200, CHARACTER_SPRITE_FACTORY.ENEMY_BUG)
  ];

  var player = new Player(5, 2, playerSprite);
  player.bindKeyBoard();
  return new Engine(enemies, player);
};


/**
 *
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
