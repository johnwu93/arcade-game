var Sprite = function () {
  // since the width of all images are uniformly the same, it is assumed that all images will have
  // these measurements
  // noinspection LocalVariableNamingConventionJS
  var WIDTH = 101;
  // noinspection LocalVariableNamingConventionJS
  var HEIGHT = 171;
  return function Sprite(imgPath) {
    'use strict';
    this.width = WIDTH;
    this.height = HEIGHT;
    // this.center = center;
    this.imagePath = imgPath;
  };
}();
