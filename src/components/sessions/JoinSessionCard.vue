<template>
  <!-- Card component shown in IndexPage to route to /session and /session/join -->
  <q-btn color="primary" @click="joinSession($router)">
    Join Session
  </q-btn>
</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar, Cookies } from 'quasar';

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

    function getRequestObj(sessionId) {
      return {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: sessionId,
        }),
      };
    }
    function handleSessionData(data) {
      Cookies.set('CHESS_SESSION_ID', data.session, { sameSite: 'Strict', path: '/' });
      Cookies.set('CHESS_PLAYER_ID', data.player, { sameSite: 'Strict', path: '/' });
    }
    function postRequest(sessionId, router) {
      fetch(props.serverUrl, getRequestObj(sessionId))
        .then(async response => await response.json())
        .then(data => handleSessionData(data))
        .then(() => router.push({ name: 'play' }))
        .catch(error => console.error(error));
    }

    return {
      joinSession(router) {
        $q.dialog({
          title: 'Join Session',
          message: 'Enter the session id to join',
          prompt: {
            model: '',
            type: 'text',
          },
          cancel: true,
          persistent: true,
        }).onOk(data => {
          postRequest(data, router);
        });
      }
    }
  },
});
</script>
