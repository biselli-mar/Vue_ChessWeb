<!-- Sidebar.vue -->
<template>
  <q-drawer v-model="drawerModel" side="right" bordered>
    <q-list>
      <q-item>
        <q-item-section class="text-black">
          On this page
        </q-item-section>
      </q-item>
      <q-separator />
      <AccordionItem v-for="section in sections" :key="section.id" :title="section.title" expanded>
        <q-list>
          <q-item class="text-info" v-for="subsection in section.children" :key="subsection.id" clickable
            @click="scrollToSubsection(subsection.id)">
            {{ subsection.title }}
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

<style lang="scss" scoped>
.text-black {
  .body--dark & {
    color: white !important;
  }
}
</style>
