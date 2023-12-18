<template>
  <svg :id="id" class="coordinates" viewBox="0 0 100 100">
    <text v-for="(file, index) in files" :key="index" :x="index * 12.5 + 10.8 + '%'" y="99%"
      :class="'file coordinates-' + fileColor(index)">{{ file }}</text>
    <text v-for="(rank, index) in ranks" :key="index" x="0.75%" :y="index * 12.5 + 3.5 + '%'"
      :class="'rank coordinates-' + rankColor(index)">{{ rank }}</text>
  </svg>
</template>

<style>
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

  &-light {
    fill: #90ab61;
  }

  &-dark {
    fill: #e2f0c9;
  }
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
    forWhite: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const whiteFiles = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
    const blackFiles = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const whiteRanks = [1, 2, 3, 4, 5, 6, 7, 8];
    const blackRanks = [8, 7, 6, 5, 4, 3, 2, 1];
    return {
      files: props.forWhite ? whiteFiles : blackFiles,
      ranks: props.forWhite ? whiteRanks : blackRanks,
      fileColor: (index) => (index % 2 == 0 ? 'light' : 'dark'),
      rankColor: (index) => (index % 2 == 0 ? 'dark' : 'light'),
    }
  },
  /*mounted(props) {
    const svg = this.$el;
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const fileSvg = (x, y, text, color) => {
      const fileText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      fileText.setAttribute('x', x + '%');
      fileText.setAttribute('y', y + '%');
      fileText.setAttribute('class', 'coordinates-' + color + ' file');
      fileText.textContent = text;
      svg.appendChild(fileText);
    }
    const rankSvg = (x, y, text, color) => {
      const rankText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      rankText.setAttribute('x', x + '%');
      rankText.setAttribute('y', y + '%');
      rankText.setAttribute('class', 'coordinates-' + color + ' rank');
      rankText.textContent = text;
      svg.appendChild(rankText);
    }
    for (let i = 0; i < 8; i++) {
      let file = files[i];
      if (!props.forWhite) {
        file = files[7 - i];
      }
      let rank = 8 - i;
      if (!props.forWhite) {
        rank = i + 1;
      }
      let fileColor = 'light';
      let rankColor = 'dark';
      if (i % 2 == 0) {
        fileColor = 'dark';
        rankColor = 'light';
      }

      fileSvg(i * 12.5 + 10.8, 99, file.toString(), fileColor);
      rankSvg(0.75, i * 12.5 + 3.5, rank.toString(), rankColor);
    }
  },*/
});
</script>
