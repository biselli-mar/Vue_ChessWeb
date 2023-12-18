<template>
  <div id="sessionIdDisplay">
    <q-chip text-color="white" color="secondary" icon="info" label="Loading game..." ref="sessionIdChip" />
  </div>
  <div class="game-container" id="game">
    <div class="chess-layout">
      <div class="board-container shadow-12">
        <ChessBoard v-bind="boardProps" class="board" @game-started="onGameStarted" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { Cookies } from 'quasar'
import ChessBoard from 'src/components/game/ChessBoard.vue'

export default defineComponent({
  name: 'GameContainer',
  components: {
    ChessBoard,
  },
  methods: {
    onGameStarted() {
      this.$refs.sessionIdChip.$el.classList.add('visually-hidden');
    },
  },
  setup() {
    const sessionIdChip = ref(null);

    const socketUrl = "ws://localhost:9000/play/socket?sessionId=" + Cookies.get('CHESS_SESSION_ID');
    function socket() {
      let _socket = new WebSocket(socketUrl);
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
    return {
      sessionIdChip,
      boardProps: {
        socket,
        playerColor: 'w',
        id: 'chessboard',
      },
    }
  },
  mounted() {
    console.log(this.$refs.sessionIdChip.$el);
    console.log(this.$refs);
    this.$refs.sessionIdChip.$el.innerText = 'Session-Id: ' + Cookies.get('CHESS_SESSION_ID');
  },
})
</script>

<style lang="scss">
@use 'src/css/variables.scss' as *;
@use "quasar/src/css/variables" as q;

$small-board-size: 100%;

.game-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: $footer-padding;
  width: 100%;
  height: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  flex-direction: row;

  @media screen and (max-width: q.$breakpoint-sm) {
    .board-container {
      min-height: 88vw;
      min-width: 88vw;
    }
  }

  @media screen and (max-height: $min-height-breakpoint) {
    .board-container {
      min-height: $min-height;
      min-width: $min-height;
    }
  }
}

.chess-layout {
  display: flex;
  flex-direction: inherit;
  justify-content: center;
  margin: 0;
  padding: 0;
  min-width: 100%;
  min-height: 100%;
}

.board {
  display: flow;
  touch-action: none;
  background-image: url('/img/board_green.png');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  position: relative;
  user-select: none;
  width: 100%;
}

.board-container {
  display: grid;
  min-width: $page-size-with-footer;
  min-height: $page-size-with-footer;
}

#sessionIdDisplay {
  display: inline-flex;
  position: absolute;
}
</style>
