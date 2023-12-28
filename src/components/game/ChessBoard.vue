<template>
  <chessboard :id="id" :class="chessBoardClass" ref="chessBoard">
    <!--Coordinates-->
    <ChessCoordinates id="chess-coordinates" :player-color="playerColor" />
    <!--Highlight Squares-->
    <HighlightSquare id="select-highlight" ref="selectHighlight" />
    <HighlightSquare id="move-highlight-from" ref="moveHighlightFrom" />
    <HighlightSquare id="move-highlight-to" ref="moveHighlightTo" />
    <HighlightSquare check id="check-highlight" ref="checkHighlight" />
    <!--Pieces-->
    <ChessPiece v-for="(piece, tile) in initialPieces" :key="tile" :piece="piece" :tile="tile" :player-color="playerColor"
      @piece-mouse-down="onPieceMouseDown" ref="pieceRefs" />
    <!--Hints-->
  </chessboard>
</template>

<style lang="scss">
@use 'src/css/game/squares.scss';
</style>

<script>
import { ref, defineComponent } from 'vue';
import { HintSquareEl } from 'assets/scripts/customElements.js';
import { Cookies } from 'quasar';
import { getPositionDiff } from 'assets/scripts/game/position.js';
import HighlightSquare from './HighlightSquare.vue';
import ChessCoordinates from './ChessCoordinates.vue';
import ChessPiece from './ChessPiece.vue';

export default defineComponent({
  name: 'ChessBoard',
  data() {
    return {
      gameOverModal: undefined,
      gameOverModalIcon: undefined,
      gameOverModalText: undefined,
      gameOverModalTitle: undefined,
      gameOverModalButton: undefined,
      moveSound: undefined,
      captureSound: undefined,
      checkSound: undefined,
      sessionIdDisplay: undefined,
      fileChars: 'ABCDEFGH',
      position: {},
      legalMoves: {},
      animationDuration: 350,
      animateState: false,
      waitingTurn: true,
      varSocket: this.socket(),
      pieceRefMap: {},
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    socket: {
      type: Function,
      required: true,
    }
  },
  components: {
    HighlightSquare,
    ChessCoordinates,
    ChessPiece,
  },
  methods: {
    onPieceMouseDown(eventData) {
      if (this.waitingTurn) {
        return;
      }
      this.removeHints();
      this.selectHighlight.show(eventData.tile);
      const moves = this.legalMoves[eventData.tile];
      if (moves !== undefined) {
        this.createHints(eventData.tile, moves);
      }
    },
    removeHints() {
      for (let hintSquare of this.chessBoard.querySelectorAll('c-hint')) {
        hintSquare.remove();
      }
    },
    createHints(srcTile, moves) {
      for (let move of moves) {
        let hintSquare = new HintSquareEl({
          srcTile: srcTile,
          targetTile: move,
          capture: this.position["pieces"][move] !== undefined,
          playerColor: this.playerColor,
        });
        hintSquare.addEventListener('hintDrop', (event) => {
          this.animateState = false;
          this.move(srcTile, move);
        });
        hintSquare.addEventListener('hintClick', (event) => {
          this.animateState = true;
          this.move(srcTile, move);
        });

        this.chessBoard.appendChild(hintSquare);
      }
    },
    move(from, to) {
      this.removeHints();
      this.selectHighlight.hide();

      const move = {
        from: from,
        to: to,
        playerId: Cookies.get('CHESS_PLAYER_ID'),
      };

      this.varSocket.send(JSON.stringify(move));
    },
    processMove(gameData) {
      const from = gameData["move"]["from"];
      const to = gameData["move"]["to"];

      const fromPieceRef = this.pieceRefMap[from];
      const toPieceRef = this.pieceRefMap[to];

      const oldFromPiece = this.position["pieces"][from];
      const newToPiece = gameData["pieces"][to];
      if (oldFromPiece !== newToPiece) { // promotion
        fromPieceRef.promote(newToPiece);
        this.position["pieces"][from] = newToPiece;
      }

      const diff = getPositionDiff(this.position["pieces"], gameData["pieces"]);
      console.log(diff);

      console.log(this.pieceRefMap);

      for (const [fromTile, toTile] of Object.entries(diff.moved)) {
        this.pieceRefMap[fromTile].move(toTile, this.animateState);
        this.pieceRefMap[toTile] = this.pieceRefMap[fromTile];
        delete this.pieceRefMap[fromTile];
      }

      let indirectCapture = false;
      for (const [tile, piece] of Object.entries(diff.captured)) {
        if (piece !== undefined) {
          this.pieceRefMap[tile].hide();
          indirectCapture = true;
        }
      }

      if (this.position["pieces"][to] !== undefined) { // regular capture
        toPieceRef.hide();
        //this.captureSound.play();
      }
      else if (indirectCapture) { // indirect capture (en passant)
        //this.captureSound.play();
      }
      else {
        //this.moveSound.play();
      }

      const turnColorKing = gameData["state"]["color"] + 'k';
      let kingRef = undefined;
      for (const [tile, pieceRef] of Object.entries(this.pieceRefMap)) {
        if (pieceRef.piece === turnColorKing) {
          kingRef = pieceRef;
          break;
        }
      }
      if (kingRef === undefined) {
        console.error("King not found");
      } else {
        if (gameData["check"]) {
          //this.checkSound.play();
          this.checkHighlight.show(kingRef.tile);
        } else {
          this.checkHighlight.hide();
        }
      }

      /*
      if (gameData["game-state"] == 'CHECKMATE') {
        this.gameOverModalTitle.text('Checkmate');
        const whiteWon = turnColor == 'b';
        this.gameOverModalIcon.addClass(whiteWon ? 'wk' : 'bk');
        this.gameOverModalText.text((whiteWon ? 'White' : 'Black') + ' wins!');
        this.gameOverModal.modal('toggle');
      } else if (gameData["game-state"] == 'DRAW') {
        this.gameOverModalTitle.text('Draw');
        this.gameOverModalText.text('The game ended in a draw');
        this.gameOverModal.modal('toggle');
      }
      */

      this.position = gameData;
      this.animateState = false;

      if (this.playerColor === gameData["state"]["color"]) {
        this.legalMoves = gameData["legal-moves"];
        this.waitingTurn = false;
      } else {
        this.legalMoves = {};
        this.waitingTurn = true;
      }

      this.moveHighlightFrom.show(from);
      this.moveHighlightTo.show(to);
    }
  },
  async setup(props) {
    const getPlayerColorUrl = 'http://localhost:9000/session/player-color?sessionId=' + Cookies.get('CHESS_SESSION_ID') + '&playerId=' + Cookies.get('CHESS_PLAYER_ID');
    const playerColorPromise = await fetch(getPlayerColorUrl);
    let playerColor = ''
    if (playerColorPromise.ok) {
      const responseJson = await playerColorPromise.json();
      playerColor = responseJson.color;
    } else {
      console.error("Error getting player color: " + playerColorPromise.status);
    }

    const chessBoard = ref(null);
    const selectHighlight = ref(null);
    const moveHighlightFrom = ref(null);
    const moveHighlightTo = ref(null);
    const checkHighlight = ref(null);
    const pieceRefs = ref([]);
    const initialPieces = {
      "A1": "wr", "A2": "wp", "A7": "bp", "A8": "br", "B1": "wn", "B2": "wp", "B7": "bp", "B8": "bn", "C1": "wb", "C2": "wp", "C7": "bp", "C8": "bb", "D1": "wq", "D2": "wp", "D7": "bp", "D8": "bq", "E1": "wk", "E2": "wp", "E7": "bp", "E8": "bk", "F1": "wb", "F2": "wp", "F7": "bp", "F8": "bb", "G1": "wn", "G2": "wp", "G7": "bp", "G8": "bn", "H1": "wr", "H2": "wp", "H7": "bp", "H8": "br",
    }
    let chessBoardClass = 'board';
    if (playerColor === 'b') {
      chessBoardClass += ' flipped';
    }
    return {
      chessBoard,
      chessBoardClass,
      selectHighlight,
      moveHighlightFrom,
      moveHighlightTo,
      checkHighlight,
      pieceRefs,
      initialPieces,
      playerColor
    }
  },
  emits: [
    'gameStarted',
  ],
  mounted(props) {
    //this.gameOverModal = $('#game-over-modal');
    //this.gameOverModalIcon = $('#game-over-modal-icon');
    //this.gameOverModalText = $('#game-over-modal-text');
    //this.gameOverModalTitle = $('#game-over-modal-title');
    //this.gameOverModalButton = $('#game-over-modal-button');
    //this.moveSound = $('#move-sound')[0];
    //this.captureSound = $('#capture-sound')[0];
    //this.checkSound = $('#check-sound')[0];

    for (let piece of this.pieceRefs) {
      this.pieceRefMap[piece.tile] = piece;
    }

    let _this = this;
    this.varSocket.onmessage = function (event) {
      if (event.data === 'Wait for opponent') {
        console.log("Waiting for opponent; start keep alive");
        _this.varSocket.send('Keep alive');
        setInterval(() => _this.varSocket.send('Keep alive'), 20000);
      } else if (event.data === 'Keep alive') {
        console.log("Keep alive");
      } else {
        const data = JSON.parse(event.data);
        if (data["error"] === undefined) {
          if (data["move"] !== undefined) {
            _this.processMove(data);
          } else {
            _this.$emit('gameStarted');
            _this.position = data;
            if (data["player-color"] === data["state"]["color"]) {
              _this.waitingTurn = false;
              _this.legalMoves = data["legal-moves"];
            } else {
              _this.waitingTurn = true;
              _this.legalMoves = {};
            }
          }

        } else {
          console.error("Socket sent error: " + data["error"]);
          alert(data["error"]);
        }
      }
    };
  },
});
</script>
