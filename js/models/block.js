'use strict';
/**
 * @description representation of a block
 * @param {number} rowId
 * @param {number} columnId
 * @param {Sprite} sprite
 * @constructor
 */
var Block = function (columnId, rowId, sprite) {
  RenderableUnit.call(this);
  this.columnId = columnId;
  this.rowId = rowId;
  this.imagePath = sprite.imagePath;
};

Block.prototype = Object.create(RenderableUnit.prototype);

Block.prototype.getRenderData = function () {
  return {
    imagePath: this.imagePath,
    position: new Position(
      computeBlockColumnPosition(this.columnId),
      computeBlockRowPosition(this.rowId)
    )
  };
};
