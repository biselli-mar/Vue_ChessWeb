<template>
  <q-layout class="desktop-layout" view="hHh Lpr lFf">
    <DesktopNavBar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.desktop-layout {
  .card-text {
    font-size: x-large;
  }
}
</style>

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
