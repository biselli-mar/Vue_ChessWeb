<template>
  <q-item clickable tag="a" :to="{ name: link }">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-white">{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<style>
.q-item {
  color: var(--q-accent);
}
</style>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavLink',
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
    },

    icon: {
      type: String,
    }
  }
})
</script>
