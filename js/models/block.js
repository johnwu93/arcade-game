'use strict';
/**
 * @description representation of a block
 * @param {number} rowId
 * @param {number} columnId
 * @param {string} imagePath
 * @constructor
 */
var Block = function (columnId, rowId, imagePath) {
  Renderable.call(this);
  this.columnId = columnId;
  this.rowId = rowId;
  this.imagePath = imagePath;
};

Block.prototype = Object.create(Renderable.prototype);


Block.prototype.getRenderData = function () {
  return {
    imagePath: this.imagePath,
    position: new Position(
      this.columnId * CTX.blockMetaInfo.column,
      this.rowId * CTX.blockMetaInfo.row
    )
  };
};
