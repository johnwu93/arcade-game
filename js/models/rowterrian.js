/**
 *
 * @param {number} rowId
 * @param {number} numCols
 * @param {Sprite} blockSprite
 * @constructor
 */
var RowTerrain = function (rowId, numCols, blockSprite) {
  'use strict';
  Renderable.call(this);
  this.row = [];
  this.rowId = rowId;
  this.blockSprite = blockSprite;
  for (var colId = 0; colId < numCols; colId++) {
    this.row[colId] = new Block(colId, rowId, blockSprite);
  }
};

RowTerrain.prototype = Object.create(Renderable.prototype);

RowTerrain.prototype.render = function () {
  'use strict';
  this.row.forEach(function (block) {
    block.render();
  });
};

RowTerrain.prototype.alignRowCenter = function alignCenter(characterSprite) {
  'use strict';
  return this.blockSprite.animationCenterRef.row - characterSprite.animationCenterRef.row;
};
