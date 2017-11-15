


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

var characterSelectionModal = new CharacterSelectionModalView([
  CHARACTER_SPRITE_FACTORY.PLAYER_BOY,
  CHARACTER_SPRITE_FACTORY.PLAYER_GIRL
]);

characterSelectionModal.show();
characterSelectionModal.bindInitialization();

