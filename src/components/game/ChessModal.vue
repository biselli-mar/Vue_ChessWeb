<template>
  <q-dialog v-model="modalVisible" persistent>
    <q-card>
      <q-card-section>
        <q-card-title>
          {{ modalTitle }}
        </q-card-title>
      </q-card-section>

      <q-card-section>
        <q-card-main>
          <p>{{ modalMessage }}</p>
        </q-card-main>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn label="Close" color="primary" @click="closeModal" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data() {
    return {
      modalVisible: false,
      modalTitle: '',
      modalMessage: '',
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
};
</script>
