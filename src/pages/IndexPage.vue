<template>
  <h1>Index</h1>
  <NewSessionCard />
</template>

<script>
import { defineComponent } from 'vue'
import NewSessionCard from 'components/sessions/NewSessionCard.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    NewSessionCard,
  },
});
</script>
