<template>
  <div :class="classStr" :id="idStr" draggable="true" @dragstart="emitEventObject('pieceDragStart')"
    @dragend="emitEventObject('pieceDragEnd')" @mousedown="emitEventObject('pieceMouseDown')"></div>
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
  setup(props) {
    const colRowTile = getColRow(props.tile)
    function emitEventObject(trigger) {
      return (event) => {
        $emit(trigger, {
          event: event,
          piece: props.piece,
          tile: props.tile,
        });
      }
    }
    return {
      classStr: 'piece ' + props.piece + ' square-' + colRowTile,
      idStr: props.piece + '-' + colRowTile,
      emitEventObject,
    }
  }
})
</script>

<style lang="scss">
@use 'src/css/game/pieces.scss';
</style>
