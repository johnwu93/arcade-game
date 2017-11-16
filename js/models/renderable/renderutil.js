/**
 * @description Utility functions to help render characters and blocks
 */
var computeBlockColumnPosition = function computeBlockColumnPosition(columnId) {
  'use strict';
  return columnId * CTX.blockMetaInfo.column;
};

var computeBlockRowPosition = function computeBlockRowPosition(rowId) {
  'use strict';
  return rowId * CTX.blockMetaInfo.row;
};
