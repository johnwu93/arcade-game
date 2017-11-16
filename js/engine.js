/* Engine.js
 * This file provides the game loop functionality (update entities and render),
 * draws the initial game board on the screen, and then calls the update and
 * render methods on your player and enemy objects (defined in your app.js).
 *
 * A game engine works by drawing the entire game screen over and over, kind of
 * like a flipbook you may have created as a kid. When your player moves across
 * the screen, it may look like just that image/character is moving or being
 * drawn but that is not the case. What's really happening is the entire "scene"
 * is being drawn over and over, presenting the illusion of animation.
 *
 * This engine makes the canvas' context (ctx) object globally available to make 
 * writing app.js a little simpler to work with.
 */

/**
 *
 * @param {Array.<Enemy>} enemies
 * @param {Player} player
 * @constructor
 */
var Engine = function Engine(enemies, player) {
  'use strict';
  this.enemies = enemies;
  this.player = player;
  this.startRow = player.getRow();
  this.startColumn = player.getColumn();
  this.statistics = new Statistics(0, bindScore, 3, bindLives);
};

/**
 * Manages render and update for entities for a game
 * @param {number} lastTime - initial time that an event occurred
 * @return {void}
 */
Engine.prototype.simulate = function simulate(lastTime) {
  /* Get our time delta information which is required if your game
   * requires smooth animation. Because everyone's computer processes
   * instructions at different speeds we need a constant value that
   * would be the same for everyone (regardless of how fast their
   * computer is) - hurray time!
   */
  var now = Date.now(),
    dt = (now - lastTime) / 1000.0;

  this.updateEntities(dt);
  this.render();
  this.computeCollision();

  if (this.isWin()) {
    this.runWinActions();
  }

  if (this.isGameOver()) {
    this.gameOverRunner();
  } else {
    /* Use the browser's requestAnimationFrame function to call this
     * function again as soon as the browser is able to draw another frame.
     */
    window.requestAnimationFrame(this.simulate.bind(this, now));
  }
};


Engine.prototype.computeCollision = function () {
  'use strict';

  // noinspection NestedFunctionJS
  /**
   * @param {Enemy} enemy
   */
  function checkCollide(enemy) {
    if (enemy.rowId !== this.player.getRow()) {
      return false;
    }
    var enemyLeftStartLocation = enemy.columnPosition + enemy.sprite.startBodyColumnPos;
    var enemyRightEndLocation = enemy.columnPosition + enemy.sprite.endBodyColumnPos;

    var playerColumnOffset = computeBlockColumnPosition(this.player.getColumn());
    var playerLeftStartLocation = playerColumnOffset + this.player.sprite.startBodyColumnPos;
    var playerRightEndLocation = playerColumnOffset + this.player.sprite.endBodyColumnPos;

    return (enemyLeftStartLocation <= playerLeftStartLocation && playerLeftStartLocation <= enemyRightEndLocation) ||
      (enemyLeftStartLocation <= playerRightEndLocation && playerRightEndLocation <= enemyRightEndLocation);
  }

  // noinspection NestedFunctionJS
  function runCollideAction() {
    this.resetPlayerPosition();
    this.loseLife();
  }

  if (_.some(this.enemies, checkCollide.bind(this))) {
    runCollideAction.call(this);
  }
};

Engine.prototype.isWin = function () {
  return this.player.getRow() === 0;
};

Engine.prototype.incrementWinScore = function () {
  this.statistics.setPoints(this.statistics.getPoints() + 1);
};

Engine.prototype.loseLife = function () {
  this.statistics.setLives(this.statistics.getLives() - 1);
};

Engine.prototype.runWinActions = function () {
  'use strict';
  this.resetPlayerPosition();
  this.incrementWinScore();
};

Engine.prototype.updateEntities = function updateEntities(dt) {
  this.enemies.forEach(function (enemy) {
    enemy.update(dt);
  });
  this.player.update();
};

Engine.prototype.render = function render() {
  /* This array holds the relative URL to the image used
   * for that particular row of the game level.
   */
  BOARD.render();
  this.renderEntities();
  this.player.render();
};

Engine.prototype.renderEntities = function renderEntities() {
  /* Loop through all of the objects within the allEnemies array and call
   * the render function you have defined.
   */
  this.enemies.forEach(function (enemy) {
    enemy.render();
  });
};

Engine.prototype.resetPlayerPosition = function () {
  'use strict';
  this.player.setRow(this.startRow);
  this.player.setColumn(this.startColumn);
};

Engine.prototype.init = function init() {
  this.resetPlayerPosition();
  this.simulate(Date.now());
};

Engine.prototype.isGameOver = function isGameOver() {
  return this.statistics.getLives() < 0;
};

/**
 * @callback gameOverRunner
 * @param {Statistics} statistics
 */

/**
 * @param {gameOverRunner} gameOverRunner
 */
Engine.prototype.setGameOverRunner = function (gameOverRunner) {
  'use strict';
  this.gameOverRunner = gameOverRunner;
};
