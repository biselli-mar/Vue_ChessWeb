<template>
  <q-img class="title-img" src="~assets/logo.png" alt="Chess Logo" :fit="'contain'" />
  <q-list class="c-list">
    <CreateSessionCard :server-url="createSessionServerUrl" />
    <JoinSessionCard :server-url="joinSessionServerUrl" />
  </q-list>
</template>

<style lang="scss" scoped>
$img-margin: 16px;

.title-img {
  max-width: calc(100vw - ($img-margin * 2));
  margin-left: $img-margin;
  margin-right: $img-margin;
  min-height: 100px;
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
  max-width: 420px;
  justify-content: center;
  align-content: center;
}

.q-img {
  max-height: 40vh;
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
