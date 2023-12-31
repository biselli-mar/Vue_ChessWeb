<template>
  <q-item class="c-item" clickable @click="joinSession($router)">
    <q-card class="c-card">
      <q-img src="https://picsum.photos/500/300">
        <div class="absolute-bottom">
          <div class="text-h6">Join a Session</div>
        </div>
      </q-img>
    </q-card>
  </q-item>
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
