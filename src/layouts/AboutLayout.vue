<template>
  <q-layout view="hHh LpR lfr">
    <MobileNavBar />
    <SideBar @scroll-to-subsection="scrollToSubsection" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import MobileNavBar from 'components/nav/MobileNavBar.vue'
import SideBar from 'components/about/SideBar.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    MobileNavBar,
    SideBar,
  },
  methods: {
    scrollToSubsection(subsectionId) {
      const element = document.getElementById(subsectionId);
      if (element) {
        element.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
      }
    },
  }
})
</script>
