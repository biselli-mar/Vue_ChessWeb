<template>
  <q-layout view="hHh Lpr lFf">
    <DesktopNavBar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import DesktopNavBar from 'components/nav/DesktopNavBar.vue'

export default defineComponent({
  name: 'DesktopLayout',

  components: {
    DesktopNavBar
  },
})
</script>
