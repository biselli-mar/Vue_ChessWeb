
<template>
    <div :id="subsectionId" class="subsection-container">
      <div class="left-side">
        <h4 class="title">{{ title }}</h4>
      </div>
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
    },
  };
  </script>
  
  <style scoped>
  .subsection-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px; 
    border-bottom: 1px solid #ccc; 
    padding-bottom: 10px; 
    width: 80%;
  }
  
  .left-side {
    flex: 1;
    margin-right: 20px;
  }
  
  .title {
    margin: 0;
  }
  
  .right-side {
    flex: 3;
  }
  
  </style>
  