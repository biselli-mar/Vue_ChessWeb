export function getPositionDiff(oldPieces, newPieces) {
  const diff = {
    moved: {},
    captured: {},
  };

  for (const [tileNew, pieceNew] of Object.entries(newPieces)) {
    if (oldPieces[tileNew] !== pieceNew) {
      for (const [tileOld, pieceOld] of Object.entries(oldPieces)) {
        if (pieceNew === pieceOld && newPieces[tileOld] !== pieceNew) {
          diff.moved[tileOld] = tileNew;
        }
      }
    }
  }

  for (const [tileOld, pieceOld] of Object.entries(oldPieces)) {
    if (newPieces[tileOld] === undefined && diff.moved[tileOld] === undefined) {
      diff.captured[tileOld] = pieceOld;
    }
  }

  return diff;
}
