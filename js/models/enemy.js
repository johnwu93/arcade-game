'use strict';
/**
 * @description representation of an enemy
 * @param {number} rowId
 * @param {number} columnPosition
 * @param {number} speed
 * @param {Sprite} sprite
 * @constructor
 */
var Enemy = function Enemy(rowId, columnPosition, speed, sprite) {
  RenderableUnit.call(this);
  this.rowId = rowId;
  this.columnPosition = columnPosition;
  this.speed = speed;
  this.sprite = sprite;
};

Enemy.prototype = Object.create(RenderableUnit.prototype);

/**
 * @description Row position needs to be computed by finding the displacement of the center of the
 * enemy's sprite and the block's sprite
 * @return {{imagePath: string, position: Position}}
 */
Enemy.prototype.getRenderData = function () {
  var blockOffset = computeBlockRowPosition(this.rowId);
  var rowPosition = blockOffset + BOARD.canvas[this.rowId].alignRowCenter(this.sprite);
  return {
    imagePath: this.sprite.imagePath,
    position: new Position(this.columnPosition, rowPosition)
  };
};

Enemy.prototype.update = function (timeChange) {
  var newPosition = this.columnPosition + timeChange * this.speed;
  var rightBoundary = CTX.canvas.width;
  var leftBoundary = -1 * this.sprite.width; // initial point that an enemy will start
  this.columnPosition = rightBoundary < newPosition ? newPosition - rightBoundary + leftBoundary : newPosition;
};
