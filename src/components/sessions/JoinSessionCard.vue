<template>
  <q-item class="c-item" clickable @click="joinSession($router)">
    <q-card class="c-card" bordered>
      <q-img :src="cardImage">
        <div class="absolute-bottom">
          <div class="text-h6">Join a Session</div>
        </div>
      </q-img>
    </q-card>
  </q-item>
</template>

<script>
import { defineComponent, computed } from 'vue'
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
    const baseCardPath = 'img/b_king_card';

    function getRequestObj(sessionId) {
      return {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: sessionId,
        })
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

    const computedDialogColor = computed(() => {
      if ($q.dark.isActive) {
        return 'accent';
      } else {
        return 'dark';
      }
    });

    return {
      joinSession(router) {
        $q.dialog({
          title: 'Join Session',
          message: 'Enter the session ID to join',
          prompt: {
            model: '',
            type: 'text',
          },
          color: computedDialogColor.value,
          cancel: true,
          persistent: true,
        }).onOk(data => {
          postRequest(data, router);
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
