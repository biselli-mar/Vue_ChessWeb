<template>
  <div :class="classStr" :id="idStr" draggable="true" @dragstart="onDragStart($event)" @dragend="onDragEnd"
    @mousedown="evEmit($event, 'pieceMouseDown')"></div>
</template>

<script>
import { defineComponent } from 'vue'
import { getColRow } from 'assets/scripts/game/tiles.js'

export default defineComponent({
  name: 'ChessPiece',
  props: {
    piece: {
      type: String,
      required: true,
    },
    tile: {
      type: String,
      required: true,
    }
  },
  emits: [
    'pieceDragStart',
    'pieceDragEnd',
    'pieceMouseDown',
  ],
  methods: {
    onDragStart(event) {
      const piece = this.$el;
      piece.classList.add('visually-hidden');

      const pieceImageSrc = window.getComputedStyle(piece).backgroundImage;
      const pieceWidth = piece.offsetWidth;

      const dragImage = document.createElement('img');
      dragImage.src = pieceImageSrc.substring(5, pieceImageSrc.length - 2); // remove `url("` and `")`
      dragImage.width = pieceWidth;

      event.dataTransfer.setDragImage(dragImage, pieceWidth, pieceWidth);
    },
    onDragEnd() {
      this.$el.classList.remove('visually-hidden');
    }
  },
  setup(props, ctx) {
    const colRowTile = getColRow(props.tile)
    function evEmit(event, trigger) {
      ctx.emit(trigger, {
        event: event,
        piece: this.piece,
        tile: this.tile,
      });
    }
    return {
      classStr: 'piece ' + props.piece + ' square-' + colRowTile,
      idStr: props.piece + '-' + colRowTile,
      evEmit,
      ctx,
    }
  }
})
</script>

<style lang="scss">
@use 'src/css/game/pieces.scss';
</style>
