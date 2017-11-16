/**
 * @description data structure for an image. A sprite knows the center of an image,
 * which is computed manually. This information is used for rendering characters appropriate to
 * terrains
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
