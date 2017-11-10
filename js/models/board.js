'use strict';

/**
 * @description A global singleton representing the board of the game
 * @param terrainLevel
 * @param numCols
 * @constructor
 */
var BOARD = function (terrainLevels, numCols) {
  // noinspection LocalVariableNamingConventionJS
  var BoardSingleton = function () {
    Renderable.call(this);
    this.canvas = [];
    for (var rowId = 0; rowId < terrainLevels.length; rowId++) {
      var rowTerrain = [];
      for (var colId = 0; colId < numCols; colId++) {
        rowTerrain[colId] = new Block(colId, rowId, terrainLevels[rowId]);
      }
      this.canvas[rowId] = rowTerrain;
    }
  };

  BoardSingleton.prototype = Object.create(Renderable.prototype);

  BoardSingleton.prototype.render = function () {
    CTX.renderer.clearRect(0, 0, CTX.canvas.width, CTX.canvas.height);
    this.canvas.forEach(function (rowLand) {
      rowLand.forEach(function (block) {
        block.render();
      });
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
