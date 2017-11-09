var CTX = (function () {
  var doc = document, // make sure this is global
    win = window,
    canvas = doc.createElement('canvas'),
    canvasRenderCtx = canvas.getContext('2d'),
    blockMetaInfo = new Position(101, 83);
  canvas.width = 505;
  canvas.height = 606;
  doc.body.appendChild(canvas);

  return {window: win, renderer: canvasRenderCtx, canvas: canvas, blockMetaInfo: blockMetaInfo};
})();
