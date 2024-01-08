<template>
  <div class="pieceaccordion">
    <AccordionItem v-for="(piece, index) in pieces" :key="index" :title="piece.label" :popupMode="false"
      :image="piece.image" accordionGroup="pieces">
      {{ piece.description }}
    </AccordionItem>
  </div>
</template>


<script>
import AccordionItem from './AccordionItem.vue';

export default {
  components: {
    AccordionItem,
  },
  data() {
    return {
      pieces: [
        {
          label: "Pawn",
          description: "Pawns move forward one square at a time. On their first move, pawns have the option to move forward two squares. Pawns capture diagonally one square forward. Pawns can't move backward.",
          image: "img/pieces/B_PAWN_L.svg",
        },
        {
          label: "Rook",
          description: "Rooks move horizontally or vertically any number of squares.",
          image: "img/pieces/B_ROOK_L.svg",
        },
        {
          label: "Knight",
          description: "Knights move in an \"L\" shape, two squares horizontally or vertically and then one square perpendicular to that. Knights can jump over other pieces.",
          image: "img/pieces/B_KNIGHT_L.svg",
        },
        {
          label: "Bishop",
          description: "Bishops move diagonally any number of squares. Bishops can't jump over other pieces.",
          image: "img/pieces/B_BISHOP_L.svg",
        },
        {
          label: "Queen",
          description: "Queens move horizontally, vertically, or diagonally any number of squares.",
          image: "img/pieces/B_QUEEN_L.svg",
        },
        {
          label: "King",
          description: "Kings move one square in any direction.  Kings cannot move onto squares that are under attack by an enemy piece.",
          image: "img/pieces/B_KING_L.svg",
        },
      ],
    };
  },
};
</script>
