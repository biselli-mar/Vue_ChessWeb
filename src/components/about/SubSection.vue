
<template>
  <div class="subsection-container">
    <div class="left-side">
      <h4 class="subsection-title">{{ title }}</h4>
    </div>
    <div class="scroll-target" :id="subsectionId"></div>
    <div class="right-side">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subsectionId: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.subsection-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  width: 80%;
}

.scroll-target {
  position: relative;
  top: -160px;
}

.left-side {
  flex: 2;
  margin-right: 20px;
}


.right-side {
  flex: 3;
  font-size: 1.25em;
}
</style>
