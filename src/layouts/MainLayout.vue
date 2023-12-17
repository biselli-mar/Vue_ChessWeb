<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lFf" class="shadow-2 rounded-borders">
      <NavBar />
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import NavBar from 'components/nav/NavBar.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    NavBar
  },
})
</script>
