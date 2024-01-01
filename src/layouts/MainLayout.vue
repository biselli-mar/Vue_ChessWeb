<template>
  <div>
    <DesktopLayout v-if="isLarge" />
    <MobileLayout v-else />
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue'
import { useQuasar } from 'quasar'
import DesktopLayout from './DesktopLayout.vue'
import MobileLayout from './MobileLayout.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    DesktopLayout,
    MobileLayout
  },

  setup() {
    const $q = useQuasar()
    const isLargeRef = ref(window.innerWidth > $q.screen.sizes.md)
    const isLarge = computed({
      get: () => isLargeRef.value,
      set: (val) => isLargeRef.value = val
    })
    return {
      isLarge
    }
  },

  methods: {
    onResize() {
      this.isLarge = window.innerWidth > this.$q.screen.sizes.md
    }
  },

  mounted() {
    window.addEventListener('resize', this.onResize)
  },

  unmounted() {
    window.removeEventListener('resize', this.onResize)
  }
})
</script>
