'use strict';

/**
 * @description A global singleton representing the board of the game
 * @param {[RowTerrain]} terrainLevel
 * @param {number} numCols
 * @constructor
 */
var BOARD = function (terrainSprites, numCols) {
  // noinspection LocalVariableNamingConventionJS
  var BoardSingleton = function () {
    Renderable.call(this);
    this.canvas = terrainSprites.map(function (terrainSprite, rowId) {
      return new RowTerrain(rowId, numCols, terrainSprite);
    });
  };

  BoardSingleton.prototype = Object.create(Renderable.prototype);

  BoardSingleton.prototype.render = function () {
    CTX.renderer.clearRect(0, 0, CTX.canvas.width, CTX.canvas.height);
    this.canvas.forEach(function (rowTerrain) {
      rowTerrain.render();
    });
  };

  return new BoardSingleton();
}(
  [
    ENVIRONMENT_SPRITE_FACTORY.WATER_BLOCK,
    ENVIRONMENT_SPRITE_FACTORY.STONE_BLOCK,
    ENVIRONMENT_SPRITE_FACTORY.STONE_BLOCK,
    ENVIRONMENT_SPRITE_FACTORY.STONE_BLOCK,
    ENVIRONMENT_SPRITE_FACTORY.GRASS_BLOCK,
    ENVIRONMENT_SPRITE_FACTORY.GRASS_BLOCK
  ],
  5
);
