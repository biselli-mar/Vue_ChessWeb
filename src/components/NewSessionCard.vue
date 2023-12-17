<template>
  <!-- Card component shown in IndexPage to route to /session and /session/join -->
  <div></div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NewSessionCard',
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      default: '#'
    },

    img: {
      type: String,
      default: ''
    }
  }
})
</script>