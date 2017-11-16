/**
 * @description Screen that appears when player loses
 * @constructor
 */
var GameOverModalView = function () {
  'use strict';
  this.modalSelection = $('#gameOverModal');
};

GameOverModalView.prototype.render = function render(score) {
  $('.game-over__score').html(score);
};

GameOverModalView.prototype.show = function show(score) {
  'use strict';
  this.render(score);
  $(this.modalSelection).modal('show');
};

GameOverModalView.prototype.bindReset = function bindReset() {
  $('.game-over__play-again .btn').click(function () {
    'use strict';
    $(this.modalSelection).modal('hide');
  });
};

GameOverModalView.prototype.bindCloseModal = function bindCloseModal(characterSelectionModal) {
  'use strict';
  $(this.modalSelection).on('hidden.bs.modal', function () {
    characterSelectionModal.show();
  });
};
