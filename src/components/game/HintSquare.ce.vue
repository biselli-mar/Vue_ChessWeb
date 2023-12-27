<template>
  <div :class="classes" @dragover.prevent @dragenter="onDragEnter" @dragleave="onDragLeave" @drop="emitEvent('hintDrop')"
    @click="emitEvent('hintClick')"></div>
</template>

<script>
import { defineComponent } from 'vue';
import { getColRow } from 'assets/scripts/game/tiles.js';

export default defineComponent({
  name: 'HintSquare',
  props: {
    tile: {
      type: String,
      required: true,
    },
    capture: Boolean,
  },
  emits: [
    'hintDrop',
    'hintClick',
  ],
  methods: {
    onDragEnter(event) {
      event.preventDefault();
      this.$el.classList.add('hint-drop');
    },
    onDragLeave(event) {
      event.preventDefault();
      this.$el.classList.remove('hint-drop');
    },
  },
  setup(props, ctx) {
    let classes = 'hint square-' + getColRow(props.tile);
    if (props.capture) {
      classes += ' hint-capture';
    } else {
      classes += ' hint-move';
    }

    function emitEvent(trigger) {
      ctx.emit(trigger, {
        tile: props.tile,
      });
    }

    return {
      classes,
      emitEvent,
    };
  },
});
</script>

<style lang="scss">
@use 'src/css/game/hints.scss';
</style>
