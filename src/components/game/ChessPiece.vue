<template>
  <div :class="classStr" :id="idStr" draggable="true" @dragstart="onDragStart($event)" @dragend="onDragEnd"
    @mousedown="evEmit(ctx, $event, 'pieceMouseDown')"></div>
</template>

<script>
import { defineComponent } from 'vue'
import { getColRow, getTileTransformValues } from 'assets/scripts/game/tiles.js'

export default defineComponent({
  name: 'ChessPiece',
  data() {
    return {
      varPiece: this.piece,
      varTile: this.tile,
    }
  },
  props: {
    piece: {
      type: String,
      required: true,
    },
    tile: {
      type: String,
      required: true,
    },
    playerColor: {
      type: String,
      required: true,
    },
    animationDuration: {
      type: Number,
      required: false,
      default: 350,
    },
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
      // Set to visible with timeout to avoid flickering
      setTimeout(() => {
        this.$el.classList.remove('visually-hidden');
      }, 10);
    },
    getTile() {
      return this.varTile;
    },
    hide() {
      this.$el.classList.add('visually-hidden');
    },
    move(to, animate) {
      const colRowFrom = getColRow(this.varTile);
      const colRowTo = getColRow(to);
      const pieceWidth = this.$el.offsetWidth;
      const transform = getTileTransformValues(colRowFrom, colRowTo, pieceWidth, this.playerColor);

      if (animate) {
        this.$el.style['z-index'] = 100;
        this.$el.style['transition'] = 'all ' + this.animationDuration + 'ms ease-in-out';
        this.$el.style['left'] = transform['x'] + 'px'
        this.$el.style['top'] = transform['y'] + 'px';
        setTimeout(() => {
          this.$el.style['z-index'] = '';
          this.$el.style['transition'] = '';
          this.$el.style['left'] = '';
          this.$el.style['top'] = '';
          this.adjustToMove(colRowFrom, colRowTo);
        }, this.animationDuration);
      } else {
        this.adjustToMove(colRowFrom, colRowTo);
      }
      this.varTile = to;
    },
    adjustToMove(colRowFrom, colRowTo) {
      this.$el.classList.add('square-' + colRowTo);
      this.$el.classList.remove('square-' + colRowFrom);
      this.$el.id, this.varPiece + '-' + colRowTo;
    },
    promote(piece) {
      this.$el.classList.remove(this.varPiece);
      this.$el.classList.add(piece);
      this.$el.id = piece + '-' + getColRow(this.varTile);
      this.varPiece = piece;
    },
    evEmit(ctx, event, trigger) {
      ctx.emit(trigger, {
        event: event,
        piece: this.varPiece,
        tile: this.varTile,
      });
    },
  },
  setup(props, ctx) {
    const colRowTile = getColRow(props.tile);
    return {
      classStr: 'piece ' + props.piece + ' square-' + colRowTile,
      idStr: props.piece + '-' + colRowTile,
      ctx,
    }
  }
})
</script>

<style lang="scss" scoped>
@use 'src/css/game/pieces.scss';
</style>
