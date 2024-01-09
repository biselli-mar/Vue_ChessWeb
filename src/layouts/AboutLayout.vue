<template>
  <q-layout view="hHh LpR lfr">
    <NavBar />
    <SideBar @scroll-to-subsection="scrollToSubsection" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import NavBar from 'components/nav/NavBar.vue'
import SideBar from 'components/about/SideBar.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    NavBar,
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
