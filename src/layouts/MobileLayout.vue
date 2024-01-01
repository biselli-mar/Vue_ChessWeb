<template>
  <q-layout view="hHh lpR fff">
    <MobileNavBar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
:root {
  font-size: xx-small;
}
</style>

<script>
import { defineComponent } from 'vue'
import MobileNavBar from 'components/nav/MobileNavBar.vue'

export default defineComponent({
  name: 'MobileLayout',

  components: {
    MobileNavBar
  },
})
</script>
