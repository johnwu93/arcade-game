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
    this.canvas.forEach(function (rowLand) {
      rowLand.forEach(function (block) {
        block.render();
      });
    });
  };

  return new BoardSingleton();
}(
  [
    'images/water-block.png',   // Top row is water
    'images/stone-block.png',   // Row 1 of 3 of stone
    'images/stone-block.png',   // Row 2 of 3 of stone
    'images/stone-block.png',   // Row 3 of 3 of stone
    'images/grass-block.png',   // Row 1 of 2 of grass
    'images/grass-block.png'    // Row 2 of 2 of grass
  ],
  5
);
