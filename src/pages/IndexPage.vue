<template>
  <q-img src="~assets/logo.png" alt="Chess Logo" style="height: 280px; width: 100%;" :fit="'contain'" />
  <q-list class="c-list">
    <CreateSessionCard :server-url="createSessionServerUrl" />
    <JoinSessionCard :server-url="joinSessionServerUrl" />
  </q-list>
</template>

<style>
.c-card {
  width: 100%;
  max-width: 400px;
}

.c-list {
  margin-top: 4em;
  display: flex;
  flex-direction: row;
}

.c-item {
  margin: 0 auto;
  width: 100%;
  justify-content: center;
}
</style>

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
