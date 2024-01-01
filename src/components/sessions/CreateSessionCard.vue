<template>
  <q-item class="c-item" clickable @click="createSession">
    <q-card class="c-card" bordered>
      <q-img :src="cardImage">
        <div class="absolute-bottom">
          <div class="text-h6">Start a new Session</div>
        </div>
      </q-img>
    </q-card>
  </q-item>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useQuasar } from 'quasar';
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
        $q.dialog({
          component: CreateSessionDialog,
          componentProps: {
            serverUrl: props.serverUrl,
          },
        });
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
