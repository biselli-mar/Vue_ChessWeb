<template>
  <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
    <q-toolbar>
      <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
      <q-toolbar-title>
        <q-item clickable tag="a" :to="{ name: 'index' }">
          <q-img src="~assets/logo.png" alt="Chess Logo" height="30px" width="70px" />
        </q-item>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-drawer v-model="drawer" show-if-above :mini="miniState" @mouseover="miniState = false" @mouseout="miniState = true"
    :width="150" :breakpoint="500" bordered :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
    <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
      <q-list padding>
        <NavLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { defineComponent, ref } from 'vue'
import NavLink from 'components/nav/NavLink.vue'

const linksList = [
  {
    title: 'Play',
    icon: 'play_arrow',
    link: 'session'
  },
  {
    title: 'Join',
    icon: 'group',
    link: 'join'
  },
  {
    title: 'About',
    icon: 'info',
    link: 'about'
  },
  {
    title: 'Profile',
    icon: 'person',
    link: 'profile'
  },
]

export default defineComponent({
  name: 'NavBar',

  components: {
    NavLink
  },

  setup() {
    return {
      essentialLinks: linksList,
      drawer: ref(false),
      miniState: ref(true)
    }
  }
})
</script>
