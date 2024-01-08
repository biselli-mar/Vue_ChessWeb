<template>
  <div>
    <q-expansion-item v-if="!popupMode" :label="title" v-model="isOpen">
      <q-card>
        <q-card-section class="flex">
          <img v-if="image" :src="image" alt="Thumbnail" class="thumbnail" />
          <div class="description-section">
            <slot></slot>
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-dialog v-if="popupMode" v-model="dialogVisible">
      <q-card>
        <q-card-section class="flex">
          <img v-if="image" :src="image" alt="Thumbnail" class="thumbnail" />
          <div class="description-section">
            <slot></slot>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn color="primary" label="Close" @click="closeDialog" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'AccordionItem',
  props: {
    title: String,
    expanded: Boolean,
    popupMode: Boolean,
    image: String,
  },
  setup(props) {
    return {
      isOpen: ref(props.expanded),
      dialogVisible: ref(false),
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
    openDialog() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
  },
});
</script>

<style scoped>
.thumbnail {
  max-width: 100%;
  margin-right: 10px;
}

.description-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
