'use strict';
// var canvas = doc.createElement('canvas');
// var ctx = canvas.getContext('2d');
/**
 * @description Abstract class that will render an entity
 * @constructor
 */
var Renderable = function () {
};

/**
 * @description Passes data for classes to render with HTML canvas. It enables classes to render
 * without know ctx
 * @abstract
 * @return {{imagePath: string, position: Position}}
 */
Renderable.prototype.getRenderData = function () {
  throw Error('Need to implement the function getRenderData');
};

Renderable.prototype.render = function () {
  // noinspection JSUnresolvedFunction
  var renderInfo = this.getRenderData();
  var column = renderInfo.position.column;
  var row = renderInfo.position.row;
  CTX.renderer.drawImage(Resources.get(renderInfo.imagePath), column, row);
};
