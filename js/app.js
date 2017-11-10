var engine = new Engine([
  new Enemy(3, 100, 10, CHARACTER_SPRITE_FACTORY.ENEMY_BUG)
]);


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
