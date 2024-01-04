<template>
  <q-layout class="mobile-layout" view="hHh lpR fff">
    <MobileNavBar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
@use "quasar/src/css/variables" as q;

@media screen and (max-width: q.$breakpoint-xs-max) {
  .card-text {
    font-size: 3vw !important;
  }
}

.mobile-layout {
  .card-text {
    font-size: large;
  }
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
