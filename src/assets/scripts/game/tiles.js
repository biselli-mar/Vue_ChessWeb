const fileChars = 'ABCDEFGH';

export function getColRow(tile) {
  return '' + (fileChars.indexOf(tile[0]) + 1) + tile[1];
}

export function getTileTransformValues(tile, pieceWidth, playerColor) {
  const colRow = getColRow(tile);

  if (playerColor === 'w') {
    return {
      x: (colRow[0] - 1) * pieceWidth,
      y: (8 - colRow[1]) * pieceWidth
    }
  } else {
    return {
      x: (8 - colRow[0]) * pieceWidth,
      y: (colRow[1] - 1) * pieceWidth
    }

  }
}
