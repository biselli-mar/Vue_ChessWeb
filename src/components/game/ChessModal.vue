<template>
  <q-dialog v-model="modalVisible" persistent>
    <q-card class="modal-card">
      <q-card-section>
        <q-card-title>
          {{ modalTitle }}
        </q-card-title>
      </q-card-section>

      <q-card-section>
        <q-card-main>
          <q-img :src="img" class="modal-image" />
          <p class="modal-message">{{ modalMessage }}</p>
        </q-card-main>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn label="Close" color="primary" @click="closeModal" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from 'vue';
import { useQuasar } from 'quasar';

export default {
  data() {
    return {
      modalVisible: ref(false),
      modalTitle: '',
      modalMessage: '',
      img: 'img/b_king_card_light.png',
    };
  },
  methods: {
    openModal(outcome) {
      this.modalVisible = true;
      this.setModalContent(outcome);
    },
    closeModal() {
      this.modalVisible = false;
    },
    setModalContent(outcome) {
      switch (outcome) {
        case 'win':
          this.modalTitle = 'Congratulations!';
          this.modalMessage = 'You have won the game!';
          break;
        case 'lose':
          this.modalTitle = 'Game Over';
          this.modalMessage = 'You have lost the game.';
          break;
        case 'draw':
          this.modalTitle = 'Game Over';
          this.modalMessage = 'The game ended in a draw.';
          break;
        default:
          this.modalTitle = 'Game Over';
          this.modalMessage = 'The game has ended.';
      }
    },
  },
  computed: {
    computedDialogColor() {
      const $q = useQuasar();
      return $q.dark.isActive ? 'accent' : 'dark';
    },
  },
};
</script>

<style scoped>
.modal-card {
  width: 100%;
  text-align: center;
  font-size: 1.25em;
}

.modal-image {
  margin-bottom: 10px; 
  width: 80%;
}

.modal-message {
  margin-top: 10px; 
}
</style>
