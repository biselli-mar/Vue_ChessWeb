<template>
  <q-no-ssr>
    <div class="game-container" id="game">
      <div class="chess-layout">
        <div class="board-container">
          <Chessboard :socket="socket" id="chessboard" class="board visually-hidden" />
        </div>
      </div>
    </div>
  </q-no-ssr>
</template>

<script>
import { defineComponent } from 'vue'
import { Cookies } from 'quasar'

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
      socket: null,
      socketUrl: "",
      varPlayerColor: this.playerColor
    }
  },
  setup() {
    this.socketUrl = "ws://localhost:9000/play/socket?sessionId=" + Cookies.get('CHESS_SESSION_ID');
    let _this = this
    this.socket = () => {
      let _socket = new WebSocket(_this.socketUrl);
      _socket.onopen = function () {
        console.log("Socket to server opened");
      }
      _socket.onerror = function (event) {
        console.error("Socket sent error");
        console.error(event.data);
      }
      _socket.onclose = function () {
        console.log("Closing socket");
      }
      return _socket;
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