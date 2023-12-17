<template>
  <div class="game-container" id="game">
    <div class="chess-layout">
      <div class="board-container">
        <Chessboard id="chessboard" class="board visually-hidden" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GameContainer',
  props: {
    playerColor: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      socket: undefiend,
      socketUrl: "",
      varPlayerColor: this.playerColor
    }
  },
  mounted() {
    this.socketUrl = "ws://localhost:9000/play/socket?sessionId=" + this.getCookie('CHESS_SESSION_ID');
    this.socket = new WebSocket(this.socketUrl);
    let _this = this;
    this.socket.onopen = function () {
      console.log("Socket to server opened");
    }
    this.socket.onmessage = function (event) {
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
    }
    this.socket.onerror = function (event) {
      console.error("Socket sent error");
      console.error(event.data);
    }
    this.socket.onclose = function () {
      console.log("Closing socket");
    }
  }
})
</script>

<style lang="scss">
@import '../../css/variables.scss';
@import '../../css/mixins.scss';

$small-board-size: calc(100vw - 2rem);

.game-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: $footer-padding;
  width: 100%;
  height: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media screen and (min-width: $breakpoint-sm) and (min-height: $min-height-breakpoint) {
    flex-direction: row;
    height: $page-size-with-footer;

    .chess-layout {
      height: $page-size-with-footer;
    }

    .board-container {
      min-width: $page-size-with-footer;
    }
  }

  @media screen and (max-height: $min-height-breakpoint) {
    .board-container {
      min-height: $min-height-breakpoint;
      min-width: $min-height-breakpoint;
    }
  }

  @media screen and (max-width: $break-sm) {
    flex-direction: column;

    .chess-layout {
      width: $small-board-size;
    }

    .board-container {
      width: $small-board-size;
      height: $small-board-size;
    }

    .board {
      width: $small-board-size;
      height: $small-board-size;
    }
  }
}

.board-container {
  @include dark-offset;
  display: grid;
}

.chess-layout {
  @include light-inset;
  display: flex;
  flex-direction: inherit;
  margin: 0;
  padding: 0;
}
</style>