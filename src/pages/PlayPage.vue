<template>
  <GameContainer />
</template>

<script>
import { defineComponent } from 'vue'
import GameContainer from 'components/game/GameContainer.vue'

export default defineComponent({
  name: 'PlayPage',
  components: {
    GameContainer
  },
})
</script>
