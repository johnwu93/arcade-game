var mainCharacter = new Player(5, 2, CHARACTER_SPRITE_FACTORY.CHARACTER_BOY);
mainCharacter.bindKeyBoard();

var engine = new Engine([
  new Enemy(3, 100, 100, CHARACTER_SPRITE_FACTORY.ENEMY_BUG),
  new Enemy(2, 100, 200, CHARACTER_SPRITE_FACTORY.ENEMY_BUG)
], mainCharacter);


function loadResources() {
  // noinspection NestedFunctionJS
  function getSpriteImages(spriteFactory) {
    var sprites = [];
    for (var key in spriteFactory) {
      if (spriteFactory.hasOwnProperty(key)) {
        sprites = sprites.concat(spriteFactory[key].imagePath);
      }
    }
    return sprites;
  }

  Resources.load(
    getSpriteImages(ENVIRONMENT_SPRITE_FACTORY).concat(getSpriteImages(CHARACTER_SPRITE_FACTORY))
  );
}

loadResources();

Resources.onReady(engine.init.bind(engine));
