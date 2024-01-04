<template>
  <svg :id="id" class="coordinates" viewBox="0 0 100 100">
    <text v-for="(file, index) in files" :key="index" :x="index * 12.5 + 10.8 + '%'" y="99%"
      :class="'file coordinates-' + fileColor(index)">{{ file }}</text>
    <text v-for="(rank, index) in ranks" :key="index" x="0.75%" :y="index * 12.5 + 3.5 + '%'"
      :class="'rank coordinates-' + rankColor(index)">{{ rank }}</text>
  </svg>
</template>

<style scoped>
.coordinates {
  left: 0;
  top: 0;
  position: absolute;
  user-select: none;
  font-weight: 600;
  font-size: 3px;

  .file {
    text-align: right;
  }

  .rank {
    text-align: left;
  }
}

.coordinates-light {
  fill: #90ab61;
}

.coordinates-dark {
  fill: #e2f0c9;
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChessCoordinates',
  props: {
    id: {
      type: String,
      required: true,
    },
    playerColor: {
      type: String,
      require: true,
    },
  },
  setup(props) {
    const forWhite = props.playerColor === 'w';
    const whiteFiles = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const whiteRanks = [8, 7, 6, 5, 4, 3, 2, 1];
    return {
      files: forWhite ? whiteFiles : whiteFiles.reverse(),
      ranks: forWhite ? whiteRanks : whiteRanks.reverse(),
      fileColor: (index) => (index % 2 == 1 ? 'light' : 'dark'),
      rankColor: (index) => (index % 2 == 1 ? 'dark' : 'light'),
    }
  }
});
</script>
