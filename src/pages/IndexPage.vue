<template>
  <h1>Index</h1>
  <CreateSessionCard :server-url="createSessionServerUrl" />
  <JoinSessionCard :server-url="joinSessionServerUrl" />
</template>

<script>
import { defineComponent } from 'vue'
import CreateSessionCard from 'components/sessions/CreateSessionCard.vue'
import JoinSessionCard from 'components/sessions/JoinSessionCard.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    CreateSessionCard,
    JoinSessionCard,
  },
  setup() {
    const createSessionServerUrl = 'http://localhost:9000/session';
    const joinSessionServerUrl = 'http://localhost:9000/session/join';
    return {
      createSessionServerUrl,
      joinSessionServerUrl,
    }
  },
});
</script>
