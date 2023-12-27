<template>
  <div :id="id" :class="classes"></div>
</template>

<script>
import { defineComponent } from 'vue';
import { getColRow } from 'assets/scripts/game/tiles.js';

export default defineComponent({
  name: 'HighlightSquare',
  props: {
    id: {
      type: String,
      required: true,
    },
    check: Boolean
  },
  setup(props) {
    let classes = 'visually-hidden';
    if (props.check) {
      classes += ' check';
    } else {
      classes += ' highlight';
    }

    return {
      classes
    };
  },
  methods: {
    show(square) {
      for (let className of this.$el.classList) {
        if (className.startsWith('square-')) {
          this.$el.classList.remove(className);
        }
      }
      this.$el.classList.add('square-' + getColRow(square));
      this.$el.classList.remove('visually-hidden');
    },
    hide() {
      this.$el.classList.add('visually-hidden');
    },
  },
});
</script>

<style lang="scss">
@use 'src/css/game/highlight.scss';
</style>
