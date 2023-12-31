<template>
  <div :class="superClass">
    <div :class="classes" @dragover.prevent @dragenter="onDragEnter" @dragleave="onDragLeave"
      @drop="emitEvent('hintDrop')" @click="emitEvent('hintClick')" ref="hintDiv"></div>
  </div>
</template>

<style lang="scss">
@use 'src/css/game/hints.scss';
</style>

<script>
import { ref, defineComponent } from 'vue';
import { getColRow } from 'assets/scripts/game/tiles.js';

export default defineComponent({
  name: 'HintSquare',
  props: {
    srcTile: {
      type: String,
      required: true,
    },
    targetTile: {
      type: String,
      required: true,
    },
    capture: Boolean,
    playerColor: {
      type: String,
      required: true,
    },
  },
  emits: [
    'hintDrop',
    'hintClick',
  ],
  methods: {
    onDragEnter(event) {
      console.log(this);
      console.log(this.hintDiv);
      event.preventDefault();
      this.hintDiv.classList.add('hint-drop');
    },
    onDragLeave(event) {
      event.preventDefault();
      this.hintDiv.classList.remove('hint-drop');
    },
  },
  setup(props, ctx) {
    const hintDiv = ref(null);

    let superClass = '';
    if (props.playerColor === 'b') {
      superClass += 'flipped';
    }
    let classes = 'hint square-' + getColRow(props.targetTile);
    if (props.capture) {
      classes += ' hint-capture';
    } else {
      classes += ' hint-move';
    }

    function emitEvent(trigger) {
      ctx.emit(trigger, {
        srcTile: props.srcTile,
        targetTile: props.targetTile,
      });
    }

    return {
      classes,
      superClass,
      emitEvent,
      hintDiv,
    };
  },
});
</script>
