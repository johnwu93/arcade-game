var Player = (function () {

  var myMOVES = {
    LEFT: 'left',
    RIGHT: 'right',
    UP: 'up',
    DOWN: 'down'
  };

  var myRowId, myColId;


  // noinspection NestedFunctionJS
  /**
   * @constructor
   * @param {number} rowId
   * @param {number} colId
   * @param {CharacterSprite} sprite
   */
  function Player(rowId, colId, sprite) {
    'use strict';
    RenderableUnit.call(this);
    this.moveRequest = null;
    myRowId = rowId;
    myColId = colId;
    this.sprite = sprite;
  }

  // noinspection NestedFunctionJS
  function getBoardNumRows() {
    return BOARD.canvas.length;
  }

  // noinspection NestedFunctionJS
  function getBoardNumCols() {
    return BOARD.canvas[0].row.length;
  }


  Player.prototype = Object.create(RenderableUnit.prototype);

  Player.prototype.getRow = function () {
    'use strict';
    return myRowId;
  };

  Player.prototype.getColumn = function () {
    'use strict';
    return myColId;
  };

  Player.prototype.setRow = function (rowId) {
    myRowId = rowId;
  };

  Player.prototype.setColumn = function (colId) {
    myColId = colId;
  };

  Player.prototype.handleInput = function (moveCommand) {
    'use strict';
    this.moveRequest = moveCommand;
  };

  Player.prototype.bindKeyBoard = function bindKeyBoard() {
    'use strict';
    var player = this;
    var allowedKeys = {
      37: myMOVES.LEFT,
      38: myMOVES.UP,
      39: myMOVES.RIGHT,
      40: myMOVES.DOWN
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
    var col, row;
    switch (command) {
      case myMOVES.LEFT:
        col = this.getColumn();
        if (col > 0) {
          this.setColumn(col - 1);
        }
        break;
      case myMOVES.RIGHT:
        col = this.getColumn();
        if (col < getBoardNumCols() - 1) {
          this.setColumn(this.getColumn() + 1);
        }
        break;
      case myMOVES.UP:
        row = this.getRow();
        if (row > 0) {
          this.setRow(row - 1);
        }
        break;
      case myMOVES.DOWN:
        row = this.getRow();
        if (row < getBoardNumRows() - 1) {
          this.setRow(row + 1);

        }
        break;
      default:
        throw Error('Invalid Move');
        break;
    }
  };

  Player.prototype.getRenderData = function () {
    'use strict';
    var blockOffset = computeBlockRowPosition(this.getRow());
    var rowPosition = blockOffset + BOARD.canvas[this.getRow()].alignRowCenter(this.sprite);
    var colPosition = computeBlockColumnPosition(this.getColumn());
    return {
      imagePath: this.sprite.imagePath,
      position: new Position(colPosition, rowPosition)
    };

  };
  return Player;
})();
