<template>
  <div>
    <SideBar @scroll-to-subsection="scrollToSubsection" />
    <MainSection title="Chess">
      <SubSection id=background title="Background">
        <span class="block-text">
          <p class="lead"><strong>Chess</strong> is a classic <em>two-player strategy board game</em> that has been played
            for
            centuries.</p>
          <p>It is a game of <strong>skill, strategy, and patience</strong>.</p>
        </span>
        <p class="block-text">
          The recorded history of chess dates back to at least a similar game from the
          <strong>seventh century in India</strong>. Chess, although <em>abstract</em>, involves <em>no hidden
            information</em> and <em>no elements of chance</em>.
          Today Chess enjoys widespread popularity and is played in tournaments across
          the world.
        </p>
      </SubSection>
      <SubSection id=rules title="Rules">
        <span class="block-text">
          <p class="lead">The objective of the game is to <strong>checkmate</strong> your opponent's king.</p>
          <p>This means putting their king in a position where it is <strong>under attack</strong> (in
            "<em>check</em>") and there is <strong>no way to move it</strong> out of attack (in "<em>mate</em>").</p>
        </span>
        <p class="block-text">run
          Each player starts with <strong>16 pieces</strong>: one king, one queen, two rooks, two
          knights, two bishops, and eight pawns. The pieces move in different ways,
          and the player must use strategy to capture their opponent's pieces while
          protecting their own.
        </p>
      </SubSection>
      <SubSection id=pieces title="Pieces">
        <PiecesAccordion></PiecesAccordion>
      </SubSection>
      <SubSection id=board title="Board">
        <div class="chessboard">
          <p class="card-text">
            The chessboard is an <strong>8x8 grid</strong> of alternating light and dark squares.
            The <strong>bottom-left square</strong> is always dark.
            Rows are called <strong>ranks</strong> and are numbered from 1 to 8.
            Columns are called <strong>files</strong> and are labeled from "a" to "h".
          </p>
          <img src="img/board_green.png" alt="Chess Board" class="boardimage" />
        </div>
      </SubSection>
    </MainSection>

    <MainSection title="Contact">
      <SubSection id=authors title="Authors">
        <p class="lead">
          This project was created by
          <a href="https://github.com/biselli-mar">Marcel Biselli</a> and
          <a href="https://github.com/emanuelk02">Emanuel Kupke</a> as part of the Web Applications course at
          the University of Applied Sciences Konstanz.
        </p>
      </SubSection>

      <SubSection id=github title="GitHub">
        <p class="lead">
          Be sure to check out the project on
          <a href="https://github.com/biselli-mar/ChessWeb">
            <span style="width: 30px; height: auto;">
              <svg width="32" height="30" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" fill="var(--bs-body-color)" clip-rule="evenodd"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
              </svg>
            </span>
            GitHub
          </a>
        </p>
      </SubSection>
    </MainSection>

    <MainSection title="Legal">
      <SubSection id=copyright title="Copyright">
        <span>Piece Sprites provided by:
          <a href="https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces/Standard">Cburnett,</a>
          <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0,</a>
          via Wikimedia Commons
        </span>
      </SubSection>
    </MainSection>
  </div>
</template>

<script>
import MainSection from 'src/components/about/MainSection.vue';
import SubSection from 'src/components/about/SubSection.vue';
import PiecesAccordion from 'src/components/about/PiecesAccordion.vue';
import SideBar from 'src/components/about/SideBar.vue';

export default {
  components: {
    MainSection,
    SubSection,
    PiecesAccordion,
    SideBar,
  },
  methods: {
    scrollToSubsection(subsectionId) {
      const element = document.getElementById(subsectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};

</script>

<style scoped>

.boardimage {
  width: 70%;
  height: 70%;
}
.chessboard {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
}
</style>

