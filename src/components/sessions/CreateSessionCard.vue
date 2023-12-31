<template>
  <q-item class="c-item" clickable @click="createSession">
    <q-card class="c-card">
      <q-img src="https://picsum.photos/500/300">
        <div class="absolute-bottom">
          <div class="text-h6">Start a new Session</div>
        </div>
      </q-img>
    </q-card>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'
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
    return {
      createSession() {
        $q.dialog({
          component: CreateSessionDialog,
          componentProps: {
            serverUrl: props.serverUrl,
          },
        });
      }
    }
  },
});
</script>
