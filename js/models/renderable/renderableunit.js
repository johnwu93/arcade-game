'use strict';

/**
 * @description Renders an individual unit, such as a character or block based on sprite and
 * position
 * @constructor
 */
var RenderableUnit = function () {
};

/**
 * @description Passes data for classes to render with HTML canvas. It enables classes to render
 * without know ctx
 * @abstract
 * @return {{imagePath: string, position: Position}}
 */
RenderableUnit.prototype.getRenderData = function () {
  throw Error('Need to implement the function getRenderData');
};

RenderableUnit.prototype.render = function () {
  // noinspection JSUnresolvedFunction
  var renderInfo = this.getRenderData();
  var column = renderInfo.position.column;
  var row = renderInfo.position.row;
  CTX.renderer.drawImage(Resources.get(renderInfo.imagePath), column, row);
};
