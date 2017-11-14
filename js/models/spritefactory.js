var SPRITE_COLUMN_CENTER = 115;
var BLOCK_CENTER_POSITION = new Position(SPRITE_COLUMN_CENTER, 90);

var ENVIRONMENT_SPRITE_FACTORY = {
  STONE_BLOCK: new Sprite('images/stone-block.png', BLOCK_CENTER_POSITION),
  WATER_BLOCK: new Sprite('images/water-block.png', BLOCK_CENTER_POSITION),
  GRASS_BLOCK: new Sprite('images/grass-block.png', BLOCK_CENTER_POSITION)
};

var CHARACTER_SPRITE_FACTORY = {
  ENEMY_BUG: new Sprite('images/enemy-bug.png', new Position(SPRITE_COLUMN_CENTER, 115)),
  CHARACTER_BOY: new Sprite('images/char-boy.png', new Position(SPRITE_COLUMN_CENTER, 105))
};
