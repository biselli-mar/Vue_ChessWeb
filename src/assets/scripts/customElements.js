import { defineCustomElement } from "vue";
import HintSquare from "src/components/game/HintSquare.ce.vue";

export const HintSquareEl = defineCustomElement(HintSquare);
customElements.define("c-hint", HintSquareEl);
