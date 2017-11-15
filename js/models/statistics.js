// noinspection JSUnusedGlobalSymbols
var Statistics = (function () {
  var myPoints, myPointsChangeCallback, myLives, myLivesChangeCallback;

  /**
   * @callback livesChangeCallback
   * @param {number}
   */

  /**
   * @callback pointsChangeCallback
   * @param {number} responseCode
   */

  /**
   * @description Keeps statistics of the game
   * @param {number} points
   * @param {pointsChangeCallback} pointsChangeCallback
   * @param {number} lives
   * @param livesChangeCallback
   * @constructor
   */
  // noinspection FunctionNamingConventionJS
  function Statistics(points, pointsChangeCallback, lives, livesChangeCallback) {
    myPointsChangeCallback = pointsChangeCallback;
    myLivesChangeCallback = livesChangeCallback;
    this.setPoints(points);
    this.setLives(lives);
  }

  Statistics.prototype.setPoints = function setPoints(points) {
    'use strict';
    myPoints = points;
    myPointsChangeCallback(myPoints);
  };

  Statistics.prototype.getPoints = function getPoints() {
    'use strict';
    return myPoints;
  };

  Statistics.prototype.setLives = function setLives(lives) {
    'use strict';
    myLives = lives;
    myLivesChangeCallback(myLives);
  };

  Statistics.prototype.getLives = function getLives() {
    'use strict';
    return myLives;
  };

  return Statistics;
})();
