var CTX = (function () {
  var doc = document, // make sure this is global
    canvas = doc.createElement('canvas'),
    canvasRenderCtx = canvas.getContext('2d'),
    blockMetaInfo = new Position(101, 83);
  canvas.width = 505;
  canvas.height = 606;
  doc.body.appendChild(canvas);

  return {renderer: canvasRenderCtx, canvas: canvas, blockMetaInfo: blockMetaInfo};
})();
