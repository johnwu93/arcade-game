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
  Renderable.call(this);
  this.rowId = rowId;
  this.columnPosition = columnPosition;
  this.speed = speed;
  this.sprite = sprite;
};

Enemy.prototype = Object.create(Renderable.prototype);

Enemy.prototype.getRenderData = function () {
  return {
    imagePath: this.sprite.imagePath,
    position: new Position(this.columnPosition, this.rowId * CTX.blockMetaInfo.row)
  };
};