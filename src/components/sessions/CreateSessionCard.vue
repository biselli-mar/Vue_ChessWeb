<template>
  <!-- Card component shown in IndexPage to route to /session and /session/join -->
  <q-btn color="primary" @click="createSession($router)">
    Create Session
  </q-btn>
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
      createSession(router) {
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
