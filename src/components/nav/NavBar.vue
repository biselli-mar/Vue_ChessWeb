<template>
  <q-header class="bg-primary">
    <q-toolbar>
      <q-btn flat class="text-accent" @click="drawer = !drawer" round dense icon="menu" />
      <q-toolbar-title>
        <q-item clickable tag="a" :to="{ name: 'index' }">
          <q-img src="~assets/logo.png" alt="Chess Logo" height="30px" width="70px" />
        </q-item>
      </q-toolbar-title>
      <q-space />
      <q-toggle v-model="darkModeToggle" checked-icon="dark_mode" color="grey-8" unchecked-icon="light_mode"
        @click="$q.dark.toggle" />
    </q-toolbar>
  </q-header>
  <q-drawer v-model="drawer" show-if-above :mini="miniState" @mouseover="miniState = false" @mouseout="miniState = true"
    :width="150" :breakpoint="500" bordered class="bg-secondary">
    <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
      <q-list padding>
        <NavMenu v-for="menu in navMenus" :key="menu.title" v-bind="menu" />
        <NavLink v-for="link in navLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'
import NavLink from 'components/nav/NavLink.vue'
import NavMenu from 'components/nav/NavMenu.vue'

const menuList = [
  {
    title: 'Play',
    icon: 'play_arrow',
    children: [
      {
        title: 'New Session',
        icon: 'add',
        link: 'session'
      },
      {
        title: 'Join Session',
        icon: 'group',
        link: 'join'
      }
    ]
  },
]

const linksList = [
  {
    title: 'About',
    icon: 'info_outline',
    link: 'about'
  },
  {
    title: 'Profile',
    icon: 'person_outline',
    link: 'profile'
  },
]

export default defineComponent({
  name: 'NavBar',

  components: {
    NavLink, NavMenu
  },

  setup() {
    const $q = useQuasar()
    return {
      navMenus: menuList,
      navLinks: linksList,
      drawer: ref(false),
      miniState: ref(true),
      darkModeToggle: ref($q.dark.isActive)
    }
  }
})
</script>
