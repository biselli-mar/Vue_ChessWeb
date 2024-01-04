const fileChars = 'ABCDEFGH';

export function getColRow(tile) {
  return '' + (fileChars.indexOf(tile[0]) + 1) + tile[1];
}

export function getTileTransformValues(colRowFrom, colRowTo, pieceWidth, playerColor) {
  const whiteX = (colRowTo[0] - colRowFrom[0]) * pieceWidth;
  const whiteY = (colRowFrom[1] - colRowTo[1]) * pieceWidth;
  if (playerColor === 'w') {
    return {
      x: whiteX,
      y: whiteY
    }
  } else {
    return {
      x: -whiteX,
      y: -whiteY
    }

  }
}
