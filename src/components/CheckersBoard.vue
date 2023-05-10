<template>
    <div class="checkers-board">
      <div v-for="(row, y) in board" :key="y" class="checkers-row">
        <div v-for="(piece, x) in row" :key="getKey(x, y)" class="checkers-cell">
          <div v-if="piece" class="checkers-piece" :class="{ 'red': piece.color === 'red', 'black': piece.color === 'black', 'king': piece.isKing }"></div>
        </div>
      </div>
    </div>
</template>
  
<script lang="ts">
  interface Piece {
    color: string;
    isKing: boolean;
  }
  
  interface Board {
    [x: number]: {
      [y: number]: Piece | null;
    };
  }
  
  export default {
    name: 'CheckersBoard',
    props: {
      board: {
        type: Object as () => Board,
        required: true
      }
    },
    methods: {
      getKey(x: number, y: number): string {
        return `${x}-${y}`;
      }
    }
  };
</script>
  
<style scoped>
  .checkers-board {
    display: flex;
    flex-direction: column;
  }
  
  .checkers-row {
    display: flex;
  }
  
  .checkers-cell {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .checkers-piece {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    border: 2px solid black;
  }
  
  .checkers-piece.red {
    background-color: red;
  }
  
  .checkers-piece.black {
    background-color: black;
  }
  
  .checkers-piece.king:before {
    content: "K";
    font-weight: bold;
    font-size: 30px;
  }
</style>
  