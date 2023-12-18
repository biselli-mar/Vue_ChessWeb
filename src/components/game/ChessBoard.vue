<template>
  <c-chessboard :id="id" class="board visually-hidden" ref="chessBoard">
    <ChessCoordinates id="chess-coordinates" />
    <!--Highlight Squares-->
    <HighlightSquare id="select-highlight" ref="selectHighlight" />
    <HighlightSquare id="move-highlight-from" ref="moveHighlightFrom" />
    <HighlightSquare id="move-highlight-to" ref="moveHighlightTo" />
    <HighlightSquare check id="check-highlight" ref="checkHighlight" />
  </c-chessboard>
</template>

<style lang="scss">
@use 'src/css/game/squares.scss';
</style>

<script>
import { ref, defineComponent } from 'vue';
import HighlightSquare from './HighlightSquare.vue';
import ChessCoordinates from './ChessCoordinates.vue';
import ChessPiece from './ChessPiece.vue';

customElements.define('c-piece', ChessPiece);

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
    },
    playerColor: {
      type: String,
      required: true,
    },
  },
  components: {
    HighlightSquare,
    ChessCoordinates,
  },
  setup(props) {
    const chessBoard = ref(null);
    const selectHighlight = ref(null);
    const moveHighlightFrom = ref(null);
    const moveHighlightTo = ref(null);
    const checkHighlight = ref(null);

    if (props.playerColor === 'b') {
      chessBoard.value.classList.add('flipped');
    }
    return {
      chessBoard,
      selectHighlight,
      moveHighlightFrom,
      moveHighlightTo,
      checkHighlight,
    }
  },
  mounted(props) {
    //this.gameOverModal = $('#game-over-modal');
    //this.gameOverModalIcon = $('#game-over-modal-icon');
    //this.gameOverModalText = $('#game-over-modal-text');
    //this.gameOverModalTitle = $('#game-over-modal-title');
    //this.gameOverModalButton = $('#game-over-modal-button');
    //this.moveSound = $('#move-sound')[0];
    //this.captureSound = $('#capture-sound')[0];
    //this.checkSound = $('#check-sound')[0];
    //this.sessionIdDisplay = $('#sessionIdDisplay');

    let _this = this;
    this.varSocket.onmessage = function (event) {
      console.log("Socket received data: " + event.data)
      if (event.data === 'Wait for opponent') {
        console.log("Waiting for opponent; start keep alive");
        _this.varSocket.send('Keep alive');
        setInterval(() => _this.varSocket.send('Keep alive'), 20000);
      } else if (event.data === 'Keep alive') {
        console.log("Keep alive");
      } else {
        const data = JSON.parse(event.data);
        console.log("Received different data:" + data);
        if (data["error"] === undefined) {
          if (data["move"] !== undefined) {
            console.log("Received move data: " + data);
            //TODO _this.processMove(data);
          } else {
            console.log("Initializing board: " + data);
            _this.sessionIdDisplay.addClass('visually-hidden');
            _this.position = data;
            console.log(data["pieces"]);
            console.log(data["legal-moves"]);
            console.log(data["player-color"]);
            fillBoard(data["pieces"], data["player-color"]);
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
    function fillBoard(pieces, playerColor) {
      for (const [tile, piece] of Object.entries(pieces)) {
        this.chessBoard.value.appendChild(new ChessPiece({
          propsData: {
            piece: piece,
            tile: tile,
          },
        }));
      }
      if (playerColor === 'b') {
        chessBoard.value.addClass('flipped');
      }
    }
  },
});
</script>
