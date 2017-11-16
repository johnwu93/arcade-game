/**
 *
 * @param {[CharacterSprite]} characterSprites
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
  characterSelector.html(characterMarkups);
};

CharacterSelectionModalView.prototype.show = function show() {
  'use strict';
  $('#characterSelectionModal').modal('show');
};

/**
 * @callback engineInitializationRunner
 * @param {CharacterSprite} characterSprite
 */

/**
 *
 * @param {engineInitializationRunner} engineInitializationRunner
 */
CharacterSelectionModalView.prototype.bindInitialization = function (engineInitializationRunner) {
  var characterSprites = this.characterSprites;
  $('.start-game__character-selection img').click(function (event) {
    'use strict';
    var characterId = Number.parseInt(event.target.className);
    var characterSprite = characterSprites[characterId];
    $('#characterSelectionModal').modal('hide');
    Resources.onReady(engineInitializationRunner.call(null, characterSprite));
  });
};
