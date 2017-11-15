/**
 * @param {string} imgPath
 * @param {Position} animationCenterRef - the center that indicates where entities should be
 * placed
 * @constructor
 */
var Sprite = function Sprite(imgPath, animationCenterRef) {
  'use strict';
  this.imagePath = imgPath;
  this.animationCenterRef = animationCenterRef;
};
