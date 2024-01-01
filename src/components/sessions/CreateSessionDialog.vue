<template>
  <!-- notice dialogRef here -->
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section align="center">
        <div class="text-h6">Choose your Color</div>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn color="secondary" @click="onWhiteClick($router)">
          <q-img :src="whiteKingImg" style="height: 60px; width:60px" />
        </q-btn>
        <q-btn color="secondary" @click="onRandomClick($router)">
          <q-img :src="randomKingImg" style="height: 80px; width:80px" />
        </q-btn>
        <q-btn color="secondary" @click="onBlackClick($router)">
          <q-img :src="blackKingImg" style="height: 60px; width:60px" />
        </q-btn>
      </q-card-actions>
      <q-separator />
      <q-card-actions align="right">
        <q-btn label="Cancel" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from 'vue';
import { useDialogPluginComponent, Cookies } from 'quasar';

export default defineComponent({
  name: 'CreateSessionDialog',
  props: {
    serverUrl: {
      type: String,
      required: true,
    },
  },

  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits
  ],

  setup(props) {
    // REQUIRED; must be called inside of setup()
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
    // dialogRef      - Vue ref to be applied to QDialog
    // onDialogHide   - Function to be used as handler for @hide on QDialog
    // onDialogOK     - Function to call to settle dialog with "ok" outcome
    //                    example: onDialogOK() - no payload
    //                    example: onDialogOK({ /*.../* }) - with payload
    // onDialogCancel - Function to call to settle dialog with "cancel" outcome

    function getRequestObj(playAsWhite) {
      return {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          playWhite: playAsWhite,
        }),
      };
    }
    function handleSessionData(data) {
      Cookies.set('CHESS_SESSION_ID', data.session, { sameSite: 'Strict', path: '/' });
      Cookies.set('CHESS_PLAYER_ID', data.player, { sameSite: 'Strict', path: '/' });
    }
    function postRequest(playAsWhite, router) {
      fetch(props.serverUrl, getRequestObj(playAsWhite))
        .then(async response => await response.json())
        .then(data => handleSessionData(data))
        .then(() => router.push({ name: 'play' }))
        .catch(error => console.error(error));
    }

    return {
      dialogRef,
      onDialogHide,
      onWhiteClick(router) {
        postRequest(true, router);
        onDialogOK({ color: 'w' })
      },
      onBlackClick(router) {
        postRequest(false, router);
        onDialogOK({ color: 'b' })
      },
      onRandomClick(router) {
        const color = Math.random() < 0.5;
        postRequest(color, router);
        onDialogOK({ color: color ? 'w' : 'b' })
      },
      onCancelClick: onDialogCancel,
      whiteKingImg: 'img/pieces/W_KING.svg',
      blackKingImg: 'img/pieces/B_KING.svg',
      randomKingImg: 'img/W_B_KING.png',
    }
  }
});
</script>
