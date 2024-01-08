<!-- Sidebar.vue -->
<template>
  <q-drawer v-model="drawerModel" side="right" behavior="desktop" bordered>
    <q-list>
      <AccordionItem v-for="section in sections" :key="section.id" :title="section.title" expanded>
        <q-list>
          <q-item v-for="subsection in section.children" :key="subsection.id" clickable
            @click="scrollToSubsection(subsection.id)">
            <q-item-section>{{ subsection.title }}</q-item-section>
          </q-item>
        </q-list>
      </AccordionItem>
    </q-list>
  </q-drawer>
</template>

<script>
import AccordionItem from './AccordionItem.vue';

export default {
  data() {
    return {
      drawerModel: true,
      sections: [
        {
          id: 'chess', title: 'Chess', children: [
            { id: 'background', title: 'Background' },
            { id: 'rules', title: 'Rules' },
            { id: 'pieces', title: 'Pieces' },
            { id: 'board', title: 'Board' },
          ]
        }, {
          id: 'contact', title: 'Contact', children: [
            { id: 'authors', title: 'Authors' },
            { id: 'github', title: 'Github' },
          ]
        }, {
          id: 'legal', title: 'Legal', children: [
            { id: 'copyright', title: 'CopyRight' },
          ]
        },
      ],
    };
  },
  methods: {
    scrollToSubsection(subsectionId) {
      this.$emit('scroll-to-subsection', subsectionId);
    },
  },
  components: { AccordionItem }
};
</script>

<style scoped>
.static-sidebar {
  position: sticky;
  top: 0;
  bottom: 0;
}
</style>
