/**
 *
 * @param {[Sprite]} characterSprites
 * @constructor
 */
var CharacterSelectionModalView = function (characterSprites) {
  'use strict';
  this.characterSprites = characterSprites;
};

CharacterSelectionModalView.prototype.render = function render() {
  'use strict';
  var characterSelector = $('.start-game__character-selection');
  var characterMarkups = this.characterSprites.map(function createCharacterSelectionMarkup(sprite, id) {
    return $('<img>', {src: sprite.imagePath, class: id.toString()});
  });
  characterSelector.append(characterMarkups);
};

CharacterSelectionModalView.prototype.show = function show() {
  'use strict';
  this.render();
  $('#characterSelectionModal').modal('show');
};


CharacterSelectionModalView.prototype.bindInitialization = function () {
  var characterSprites = this.characterSprites;
  $('.start-game__character-selection img').click((function (event) {
    'use strict';
    var characterId = Number.parseInt(event.target.className);
    $('#characterSelectionModal').modal('hide');
    Resources.onReady(initializeGame.call(null, characterSprites[characterId]));
  }));
};
