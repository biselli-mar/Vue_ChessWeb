<template>
  <div id="sessionIdDisplay">
    <q-chip text-color="white" color="secondary" icon="info" label="Loading game..." ref="sessionIdChip" />
  </div>
  <div :class="'game-container' + orientation" id="game" ref="gameContainer">
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
import { ref, computed, defineComponent } from 'vue'
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
    onResize() {
      this.gameContainer.classList.remove('landscape');
      this.gameContainer.classList.remove('portrait');
      if (window.innerWidth > window.innerHeight) {
        this.gameContainer.classList.add('landscape');
      } else {
        this.gameContainer.classList.add('portrait');
      }
    }
  },
  setup() {
    const gameContainer = ref(null);
    const sessionIdChip = ref(null);

    const socketUrl = "ws://localhost:9001/socket.io?sessionId=" + Cookies.get('CHESS_SESSION_ID');
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
      gameContainer,
      orientation: window.innerWidth > window.innerHeight ? ' landscape' : ' portrait',
      boardProps: {
        socket,
        id: 'chessboard',
      },
    }
  },
  mounted() {
    this.$refs.sessionIdChip.$el.innerText = 'Session-Id: ' + Cookies.get('CHESS_SESSION_ID');
    window.addEventListener('resize', this.onResize)
  },

  unmounted() {
    window.removeEventListener('resize', this.onResize)
  }
})
</script>

<style lang="scss" scoped>
@use 'src/css/game/gameContainer.scss';
</style>
