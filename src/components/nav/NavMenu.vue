<template>
  <q-item clickable>
    <q-menu class="bg-primary" anchor="bottom middle" self="top middle">
      <q-list style="min-width: 100px">
        <NavLink v-for="child in children" class="text-accent" :key="child.title" v-close-popup v-bind="child" />
      </q-list>
    </q-menu>
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label class="text-white">{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'
import NavLink from 'components/nav/NavLink.vue'

export default defineComponent({
  name: 'NavMenu',
  components: {
    NavLink
  },
  props: {
    title: {
      type: String,
      required: true
    },

    icon: {
      type: String,
    },

    children: {
      type: Array,
    }
  }
})
</script>