// noinspection JSUnusedGlobalSymbols
var Statistics = (function () {
  var myPoints, myPointsCallback;

  /**
   * @callback pointsChangeCallback
   * @param {number} responseCode
   */

  /**
   * @description Keeps statistics of the game
   * @param {number} points
   * @param {pointsChangeCallback} pointsCallback
   * @constructor
   */
  // noinspection FunctionNamingConventionJS
  function Statistics(points, pointsCallback) {
    myPointsCallback = pointsCallback;
    this.setPoints(points);
  }

  Statistics.prototype.setPoints = function setPoints(points) {
    'use strict';
    myPoints = points;
    myPointsCallback(myPoints);
  };

  Statistics.prototype.getPoints = function getPoints() {
    'use strict';
    return myPoints;
  };
  return Statistics;
})();
