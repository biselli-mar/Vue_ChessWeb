<template>
  <q-img src="~assets/logo.png" alt="Chess Logo" style="height: 280px; width: 100%;" :fit="'contain'" />
  <q-list class="c-list">
    <CreateSessionCard :server-url="createSessionServerUrl" />
  </q-list>
</template>

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

export default defineComponent({
  name: 'IndexPage',
  components: {
    CreateSessionCard,
  },
  setup() {
    const createSessionServerUrl = 'http://localhost:9000/session';
    return {
      createSessionServerUrl,
    }
  },
});
</script>
