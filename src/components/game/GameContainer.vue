<template>
  <div id="sessionIdDisplay">
    <q-chip text-color="white" color="secondary" icon="info" label="Loading game..." ref="sessionIdChip" />
  </div>
  <div class="game-container" id="game">
    <div class="chess-layout">
      <div class="board-container shadow-12">
        <Suspense>
          <ChessBoard v-bind="boardProps" @game-started="onGameStarted" />
        </Suspense>
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
        id: 'chessboard',
      },
    }
  },
  mounted() {
    this.$refs.sessionIdChip.$el.innerText = 'Session-Id: ' + Cookies.get('CHESS_SESSION_ID');
  },
})
</script>

<style lang="scss" scoped>
@use 'src/css/game/gameContainer.scss';
</style>
