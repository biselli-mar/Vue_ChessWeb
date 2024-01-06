<template>
    <div :id="sectionId" class="main-section">
      <h2>{{ title }}</h2>
      <div class="subsection-container">
        <slot></slot>
      </div>
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
<style scoped>
.main-section {
  margin-bottom: 20px; /* Adjust margin as needed */
}

.section-title {
  color: #333; /* Set the color of the section title */
  font-size: 1.5em; /* Adjust the font size of the section title */
  margin-bottom: 10px; /* Adjust the margin bottom of the section title */
}

</style>