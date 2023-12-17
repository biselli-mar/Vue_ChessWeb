<template>
  <GameContainer :playerColor="playerColor" />
</template>

<script>
import { defineComponent } from 'vue'
import GameContainer from 'components/game/GameContainer.vue'

export default defineComponent({
  name: 'PlayPage',
  props: {
    playerColor: {
      type: String,
      required: true
    }
  },
  components: {
    GameContainer
  },
})
</script>