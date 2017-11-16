/**
 * @description representation of a character's sprite. This is used for collision computations.
 * It inherit properties from sprite.
 * @param {Sprite} sprite
 * @param {number} startBodyColumnPos - the pixel position of left side of a character
 * @param {number} endBodyColumnPos - the pixel position of the right side of a character
 * @constructor
 */
function CharacterSprite(sprite, startBodyColumnPos, endBodyColumnPos) {
  'use strict';
  Sprite.call(this, sprite.imagePath, sprite.animationCenterRef);
  this.startBodyColumnPos = startBodyColumnPos;
  this.endBodyColumnPos = endBodyColumnPos;
}

CharacterSprite.prototype = Object.create(Sprite.prototype);
