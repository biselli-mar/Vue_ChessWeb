<template>
  <q-item class="c-item" clickable @click="createSession">
    <q-card class="c-card" bordered>
      <q-img :src="cardImage">
        <div class="absolute-bottom">
          <div class="card-text">Start a new Session</div>
        </div>
      </q-img>
    </q-card>
  </q-item>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useQuasar } from 'quasar';
import { NetworkHandler } from 'src/assets/scripts/networkHandler.js';
import CreateSessionDialog from './CreateSessionDialog.vue'

export default defineComponent({
  name: 'CreateSessionCard',
  props: {
    serverUrl: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const $q = useQuasar();
    const baseCardPath = 'img/w_king_card';
    return {
      createSession() {
        if (NetworkHandler.isOffline()) {
          $q.notify({
            message: 'You are offline. Please connect to the internet to create a session.',
            type: 'negative',
          });
        } else {
          $q.dialog({
            component: CreateSessionDialog,
            componentProps: {
              serverUrl: props.serverUrl,
            },
          });
        }
      },
      cardImage: computed(() => {
        if ($q.dark.isActive) {
          return baseCardPath + '_dark.png';
        } else {
          return baseCardPath + '_light.png';
        }
      }),
    }
  },
});
</script>
