<template>
  <chessboard :id="id" class="board visually-hidden">
    <ChessCoordinates id="chess-coordinates" />
    <!--Highlight Squares-->
    <HighlightSquare id="select-highlight" />
    <HighlightSquare id="move-highlight-from" />
    <HighlightSquare id="move-highlight-to" />
    <HighlightSquare check id="check-highlight" />
  </chessboard>
</template>

<script>
import { defineComponent } from 'vue';
import HighlightSquare from './HighlightSquare.vue';
import ChessCoordinates from './ChessCoordinates.vue';

export default defineComponent({
  name: 'ChessBoard',
  data: () => ({
    chessBoard: undefined,
    selectHighlight: undefined,
    moveHighlightFrom: undefined,
    moveHighlightTo: undefined,
    checkHighlight: undefined,
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
    varPlayerColor: this.playerColor,
    varSocket: this.socket(),
  }),
  props: {
    playerColor: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    socket: {
      type: Function,
      required: true,
    },
  },
  components: {
    HighlightSquare,
    ChessCoordinates,
  },
  setup(props) {
    let _this = this;
    this.varSocket.onmessage = function (event) {
      console.log("Socket received data: " + event.data)
      if (event.data === 'Wait for opponent') {
        console.log("Waiting for opponent; start keep alive");
        _this.socket.send('Keep alive');
        setInterval(() => _this.socket.send('Keep alive'), 20000);
      } else if (event.data === 'Keep alive') {
        console.log("Keep alive");
      } else {
        const data = JSON.parse(event.data);
        console.log("Received different data:" + data);
        if (data["error"] === undefined) {
          if (data["move"] !== undefined) {
            console.log("Received move data: " + data);
            _this.processMove(data);
          } else {
            console.log("Initializing board: " + data);
            _this.sessionIdDisplay.addClass('visually-hidden');
            _this.position = data;
            console.log(data["pieces"]);
            console.log(data["legal-moves"]);
            console.log(data["player-color"]);
            _this.varPlayerColor = data["player-color"];
            _this.fillBoard(data["pieces"], data["player-color"]);
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
    return {};
  },
  mounted(props) {
    this.chessBoard = document.getElementById(props.id);
    this.selectHighlight = $('#select-highlight');
    this.moveHighlightFrom = $('#move-highlight-from');
    this.moveHighlightTo = $('#move-highlight-to');
    this.checkHighlight = $('#check-highlight');
    this.gameOverModal = $('#game-over-modal');
    this.gameOverModalIcon = $('#game-over-modal-icon');
    this.gameOverModalText = $('#game-over-modal-text');
    this.gameOverModalTitle = $('#game-over-modal-title');
    this.gameOverModalButton = $('#game-over-modal-button');
    this.moveSound = $('#move-sound')[0];
    this.captureSound = $('#capture-sound')[0];
    this.checkSound = $('#check-sound')[0];
    this.sessionIdDisplay = $('#sessionIdDisplay');
    if (props.playerColor === 'b') {
      this.chessBoard.addClass('flipped');
    }
  },
});
</script>
