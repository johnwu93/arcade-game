/**
 * @param {string} imgPath
 * @param {Position} animationCenterReference - the center that indicates where entities should be
 * placed
 */
var Sprite = function () {
  // since the width of all images are uniformly the same, it is assumed that all images will have
  // these measurements
  // noinspection LocalVariableNamingConventionJS
  var WIDTH = 101;
  // noinspection LocalVariableNamingConventionJS
  var HEIGHT = 171;

  /**
   * @param {string} imgPath
   * @param {Position} animationCenterReference - the center that indicates where entities should be
   * placed
   */
  return function Sprite(imgPath, animationCenterRef) {
    'use strict';
    this.width = WIDTH;
    this.height = HEIGHT;
    // this.center = center;
    this.imagePath = imgPath;
    this.animationCenterRef = animationCenterRef;
  };
}();
