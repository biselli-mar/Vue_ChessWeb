<template>
  <chessboard :id="id" :class="chessBoardClass" ref="chessBoard">
    <!--Coordinates-->
    <ChessCoordinates id="chess-coordinates" :player-color="playerColor" />
    <!--Sounds-->
    <audio v-for="sound in audioFiles" :key="sound.id" :id="sound.id" :src="sound.src" preload="auto" ref="audioRefs" />
    <!--Highlight Squares-->
    <HighlightSquare id="select-highlight" ref="selectHighlight" />
    <HighlightSquare id="move-highlight-from" ref="moveHighlightFrom" />
    <HighlightSquare id="move-highlight-to" ref="moveHighlightTo" />
    <HighlightSquare check id="check-highlight" ref="checkHighlight" />
    <!--Pieces-->
    <ChessPiece v-for="(piece, tile) in initialPieces" :key="tile" :piece="piece" :tile="tile" :player-color="playerColor"
      @piece-mouse-down="onPieceMouseDown" ref="pieceRefs" />
    <!--Hints-->
    <ChessModal ref="chessModal" />
  </chessboard>
</template>

<style lang="scss" scoped>
@use 'src/css/game/squares.scss';
</style>

<script>
import { ref, defineComponent } from 'vue';
import { HintSquareEl } from 'assets/scripts/customElements.js';
import { Cookies, useQuasar } from 'quasar';
import { getPositionDiff } from 'assets/scripts/game/position.js';
import HighlightSquare from './HighlightSquare.vue';
import ChessCoordinates from './ChessCoordinates.vue';
import ChessPiece from './ChessPiece.vue';
import ChessModal from './ChessModal.vue';
import { timeout } from 'workbox-core/_private';

const audioFiles = [
  { id: 'move-sound', src: process.env.REPO_NAME + '/sounds/move.mp3' },
  { id: 'capture-sound', src: process.env.REPO_NAME + '/sounds/capture.mp3' },
  { id: 'check-sound', src: process.env.REPO_NAME + '/sounds/check.mp3' },
];

export default defineComponent({
  name: 'ChessBoard',
  data() {
    return {
      gameOverModal: undefined,
      gameOverModalIcon: undefined,
      gameOverModalText: undefined,
      gameOverModalTitle: undefined,
      gameOverModalButton: undefined,
      sessionIdDisplay: undefined,
      fileChars: 'ABCDEFGH',
      position: {},
      legalMoves: {},
      animationDuration: 350,
      animateState: false,
      waitingTurn: true,
      varSocket: this.socket(),
      pieceRefMap: {},
      audioRefMap: {},
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
    ChessModal,
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
    playSound(soundId) {
      this.audioRefMap[soundId].play();
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
      this.legalMoves = {};
      this.waitingTurn = true;
      this.showLoading('Processing move...');
    },
    showOutcomeModal(outcome) {
      this.$refs.chessModal.openModal(outcome);
    },
    processMove(gameData) {
      this.hideLoading();
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
        this.playSound('capture-sound');
      }
      else if (indirectCapture) { // indirect capture (en passant)
        this.playSound('capture-sound');
      }
      else {
        this.playSound('move-sound');
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
          this.playSound('check-sound');
          this.checkHighlight.show(kingRef.getTile());
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
      if (gameData["game-state"] === 'CHECKMATE') {
        if (gameData["state"]["color"] === this.playerColor) {
          this.showOutcomeModal('lose');
        } else {
          this.showOutcomeModal('win');
        }
      } else if (gameData["game-state"] === 'DRAW') {
        this.showOutcomeModal('draw');
      }

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
    const $q = useQuasar();
    console.log("ChessBoard setup")
    const getPlayerSateUrl = process.env.BACKEND_URL + '/session/player-state?sessionId=' + Cookies.get('CHESS_SESSION_ID') + '&playerId=' + Cookies.get('CHESS_PLAYER_ID');
    const playerStatePromise = await fetch(getPlayerSateUrl);
    console.log("Fetched state")
    let playerColor = ''
    let initialPieces = {};
    if (playerStatePromise.ok) {
      const responseJson = await playerStatePromise.json();
      playerColor = responseJson.color;
      initialPieces = responseJson.pieces;
    } else {
      console.error("Error getting player state: " + playerStatePromise.status);
    }

    const chessBoard = ref(null);
    const selectHighlight = ref(null);
    const moveHighlightFrom = ref(null);
    const moveHighlightTo = ref(null);
    const checkHighlight = ref(null);
    const pieceRefs = ref([]);
    const audioRefs = ref([]);

    let chessBoardClass = 'board';
    if (playerColor === 'b') {
      chessBoardClass += ' flipped';
    }

    function showLoading(message) {
      $q.loading.show({
        delay: 500,
        message: message,
      });
    }
    function hideLoading() {
      $q.loading.hide();
    }
    return {
      chessBoard,
      chessBoardClass,
      selectHighlight,
      moveHighlightFrom,
      moveHighlightTo,
      checkHighlight,
      pieceRefs,
      audioRefs,
      initialPieces,
      playerColor,
      audioFiles,
      showLoading,
      hideLoading,
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
    console.log("ChessBoard mounted")

    for (let piece of this.pieceRefs) {
      this.pieceRefMap[piece.tile] = piece;
    }

    for (let audio of this.audioRefs) {
      audio.volume = 0.1;
      this.audioRefMap[audio.id] = audio;
    }

    let _this = this;
    console.log("Setting socket onmessage")
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
