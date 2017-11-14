var MOVES = {
  LEFT: 'left',
  RIGHT: 'right',
  UP: 'up',
  DOWN: 'down'
};

function getNumRows() {
  return BOARD.canvas.length;
}

function getNumCols() {
  return BOARD.canvas[0].row.length;
}

var Player = function (rowId, colId, sprite) {
  'use strict';
  RenderableUnit.call(this);
  this.moveRequest = null;
  this.rowId = rowId;
  this.colId = colId;
  this.sprite = sprite;
};

Player.prototype = Object.create(RenderableUnit.prototype);

Player.prototype.handleInput = function (moveCommand) {
  'use strict';
  this.moveRequest = moveCommand;
};

Player.prototype.bindKeyBoard = function bindKeyBoard() {
  'use strict';
  var player = this;
  var allowedKeys = {
    37: MOVES.LEFT,
    38: MOVES.UP,
    39: MOVES.RIGHT,
    40: MOVES.DOWN
  };
  document.addEventListener('keyup', function (e) {
    player.handleInput(allowedKeys[e.keyCode]);
  });

};

Player.prototype.update = function update() {
  'use strict';
  if (this.moveRequest !== null) {
    this.move(this.moveRequest);
    this.moveRequest = null;
  }
};

Player.prototype.move = function move(command) {
  'use strict';
  switch (command) {
    case MOVES.LEFT:
      if (this.colId > 0) {
        this.colId = this.colId - 1;
      }
      break;
    case MOVES.RIGHT:
      if (this.colId < getNumCols() - 1) {
        this.colId = this.colId + 1;
      }
      break;
    case MOVES.UP:
      if (this.rowId > 0) {
        this.rowId = this.rowId - 1;
      }
      break;
    case MOVES.DOWN:
      if (this.rowId < getNumRows() - 1) {
        this.rowId = this.rowId + 1;
      }
      break;
    default:
      throw Error('Invalid Move');
      break;
  }
};

Player.prototype.getRenderData = function () {
  'use strict';
  var blockOffset = computeBlockRowPosition(this.rowId);
  var rowPosition = blockOffset + BOARD.canvas[this.rowId].alignRowCenter(this.sprite);
  var colPosition = computeBlockColumnPosition(this.colId);
  return {
    imagePath: this.sprite.imagePath,
    position: new Position(colPosition, rowPosition)
  };

};
