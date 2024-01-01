<template>
  <q-header class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-tabs align="left">
        <q-route-tab v-bind="homeTab" />
        <q-route-tab v-for="link in navLinks" :key="link.title" :to="'/' + link.link" :label="link.title"
          :icon="link.icon" />
      </q-tabs>
      <q-space />
      <q-toggle v-model="darkModeToggle" checked-icon="dark_mode" color="grey-8" unchecked-icon="light_mode"
        @click="$q.dark.toggle" />
    </q-toolbar>
  </q-header>
</template>

<style scoped>
@media screen and (max-width: 320px) {
  .q-tab {
    padding: 0 6px;
  }
}
</style>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'
import { linksList } from './RouteTabs.js'

export default defineComponent({
  name: 'NavBar',

  components: {
  },

  setup() {
    const $q = useQuasar()
    return {
      homeTab: {
        label: 'Home',
        icon: 'home',
        to: '/'
      },
      navLinks: linksList,
      darkModeToggle: ref($q.dark.isActive)
    }
  }
})
</script>
