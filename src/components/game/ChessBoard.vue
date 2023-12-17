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
  },
  components: {
    HighlightSquare,
    ChessCoordinates,
  },
  mounted(props) {
    this.chessBoard = document.getElementById(props.id);
    if (props.playerColor === 'b') {
      this.chessBoard.addClass('flipped');
    }
  },
});
</script>
