<!-- Sidebar.vue -->
<template>
  <q-drawer v-model="drawerModel" side="right">
    <q-list>
      <q-item
        v-for="subsection in subsections"
        :key="subsection.id"
        clickable
        @click="scrollToSubsection(subsection.id)"
      >
        <q-item-label>{{ subsection.title }}</q-item-label>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawerModel: true,
      subsections: [
        { id: 'background', title: 'Background' },
        { id: 'rules', title: 'Rules' },
        { id: 'pieces', title: 'Pieces'},
        { id: 'board', title: 'Board'},
        { id: 'authors', title: 'Authors'},
        { id: 'github', title: 'Github'},
        { id: 'copyright', title: 'CopyRight'},

      ],
    };
  },
  methods: {
    scrollToSubsection(subsectionId) {
      this.$emit('scroll-to-subsection', subsectionId);
    },
  },
};
</script>

<style scoped>
.static-sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
}
</style>