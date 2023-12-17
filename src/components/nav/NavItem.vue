<template>
  <NavLink v-if="isLink" v-bind="linkObject" />
  <NavMenu v-else v-bind="menuObject" />
</template>

<script>
import { defineComponent } from 'vue'
import NavMenu from 'components/nav/NavMenu.vue'
import NavLink from 'components/nav/NavLink.vue'

export default defineComponent({
  name: 'NavLink',
  components: {
    NavMenu,
    NavLink
  },
  props: {
    type: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
    },

    children: {
      type: Array,
    },

    icon: {
      type: String,
    }
  },
  setup(props) {
    if (props.type === 'menu') {
      return {
        isLink: false,
        menuObject: {
          title: props.title,
          icon: props.icon,
          children: props.children
        }
      }
    } else {
      return {
        isLink: true,
        linkObject: {
          title: props.title,
          icon: props.icon,
          link: props.link
        }
      }
    }
  }
})
</script>
