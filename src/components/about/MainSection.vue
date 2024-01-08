<template>
  <div :id="sectionId" class="main-section">
    <div class="section-title-container flex">
      <h2 class="section-title">{{ title }}</h2>
      <div class="spacer"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
;
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.main-section {
  margin-bottom: 20px;
  width: 80%;
}

.spacer {
  flex: 3;
}

.section-title-container {
  z-index: 10;
  position: sticky;
  top: 50px;
  width: 80%;
  pointer-events: none;
}

.section-title {
  padding-top: .75em;
  margin: 0;
  margin-bottom: .5em;
  flex: 2;
  background-color: #fff;

  .body--dark & {
    background-color: var(--q-dark-page);
  }
}

:global(.subsection-title) {
  position: sticky;
  top: 160px;
  margin: 0;
  z-index: 9;
}
</style>
