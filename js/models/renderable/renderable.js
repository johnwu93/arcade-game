'use strict';

/**
 * @description Abstract class that will render an entity
 * @constructor
 */
var Renderable = function () {
};

Renderable.prototype.render = function () {
  throw Error('Need to implement the function render');
};
