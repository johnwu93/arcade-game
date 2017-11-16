var SPRITE_COLUMN_CENTER = 115;
var BLOCK_CENTER_POSITION = new Position(SPRITE_COLUMN_CENTER, 90);

var ENVIRONMENT_SPRITE_FACTORY = {
  STONE_BLOCK: new Sprite('images/stone-block.png', BLOCK_CENTER_POSITION),
  WATER_BLOCK: new Sprite('images/water-block.png', BLOCK_CENTER_POSITION),
  GRASS_BLOCK: new Sprite('images/grass-block.png', BLOCK_CENTER_POSITION)
};

var CHARACTER_SPRITE_FACTORY = function () {
  var enemyBugSprite = new Sprite('images/enemy-bug.png', new Position(SPRITE_COLUMN_CENTER, 115));
  var boySprite = new Sprite('images/char-boy.png', new Position(SPRITE_COLUMN_CENTER, 105));
  var girlSprite = new Sprite('images/char-princess-girl.png', new Position(SPRITE_COLUMN_CENTER, 95));
  return {
    ENEMY_BUG: new CharacterSprite(enemyBugSprite, 5, 100),
    PLAYER_BOY: new CharacterSprite(boySprite, 25, 90),
    PLAYER_GIRL: new CharacterSprite(girlSprite, 20, 90)
  };
}();
