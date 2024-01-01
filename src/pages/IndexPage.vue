<template>
  <q-img class="title-img" src="~assets/logo.png" alt="Chess Logo" :fit="'contain'" />
  <q-list class="c-list">
    <CreateSessionCard :server-url="createSessionServerUrl" />
    <JoinSessionCard :server-url="joinSessionServerUrl" />
  </q-list>
</template>

<style scoped>
.title-img {
  min-height: 120px;
  height: 30vh;
  width: 100%;
}
</style>

<style>
.c-card {
  padding: 0;
  margin: 0 0;
  width: 96%;
}

.c-list {
  padding: 0;
  margin-top: 4em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.c-item {
  margin: 0;
  padding: 0;
  border-radius: 0.5em;
  width: 100%;
  justify-content: center;
  align-content: center;
  max-width: 420px;
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
