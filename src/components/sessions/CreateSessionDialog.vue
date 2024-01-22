<template>
  <!-- notice dialogRef here -->
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section align="center">
        <div class="text-h6">Choose your Color</div>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn color="secondary" @click="onWhiteClick($router)">
          <q-img class="sm-img" :src="whiteKingImg" />
        </q-btn>
        <q-btn color="secondary" @click="onRandomClick($router)">
          <q-img class="lg-img" :src="randomKingImg" />
        </q-btn>
        <q-btn color="secondary" @click="onBlackClick($router)">
          <q-img class="sm-img" :src="blackKingImg" />
        </q-btn>
      </q-card-actions>
      <q-separator />
      <q-card-actions align="right">
        <q-btn label="Cancel" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped>
.sm-img {
  width: 15vw;
  height: 15vw;
  max-width: 60px;
  max-height: 60px
}

.lg-img {
  width: 20vw;
  height: 20vw;
  max-width: 80px;
  max-height: 80px
}
</style>

<script>
import { defineComponent } from 'vue';
import { useDialogPluginComponent, Cookies, useQuasar } from 'quasar';

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
    const $q = useQuasar();
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
      $q.loading.show({
        message: 'Creating Session...',
      })
      fetch(props.serverUrl, getRequestObj(playAsWhite))
        .then(async response => await response.json())
        .then(data => handleSessionData(data))
        .then(() => {
          $q.loading.hide();
          router.push({ name: 'play' })
        })
        .catch(error => {
          $q.loading.hide();
          $q.notify({
            message: 'Something went wrong. Please try again later.',
            type: 'negative',
          });
          console.error(error)
        });
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
