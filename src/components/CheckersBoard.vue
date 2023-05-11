<template>
  <div class="checkerboard-container">
    <div class="checkerboard-header">
      <h1>{{username}}</h1>
      <h2>Game Pin: {{gamepin}}</h2>
    </div>
    <div class="checkerboard">
      <div v-for="row in rows" :key="row">
        <div class="checkerboard__square" v-for="col in cols" :key="col" :class="{'checkerboard__square--dark': isDarkSquare(row, col)}">
          <div class="stone" v-if="isDarkSquare(row, col) && shouldAddStone(row, col)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckersBoard",
  props: {
    username: {
      type: String,
      required: true,
    },
    gamepin: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      rows: 8,
      cols: 8,
    }
  },
  methods: {
    isDarkSquare(row, col) {
      // Determine if the square should be dark or light
      return (row + col) % 2 === 0
    },
    shouldAddStone(row, col) {
      // Determine if a stone should be added to the square
      // Customize this logic based on your requirements
      // For example, you can check specific row and column conditions
      return (row === 0 || row === 2) && (col % 2 !== 0);
    },
  },
}
</script>

<style>
.checkerboard-container {
  display: flex;
  flex-direction: column;
  background-color: #D9D9D9;
  width: 640px;
  border-radius: 10px 10px 0 0;
  border: 2px solid #ed135d;
  font-family: 'Roboto', sans-serif;
}

.checkerboard-header {
  border-bottom: 5px solid #ed135d;
  padding: 0 10px 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  color: #ed135d;
}

.checkerboard-header a {
  color: #f34981;
  text-decoration: none;
}

.checkerboard {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  background-color: #D9D9D9;
  font-family: 'Roboto', sans-serif;
}

.checkerboard__square {
  width: 80px;
  height: 80px;
  background-color: #fff;
}

.checkerboard__square--dark {
  background-color: #373737;
}

.stone {
  background-color: #000; /* Customize the stone color */
  width: 20px; /* Customize the stone size */
  height: 20px;
  border-radius: 50%;
  margin: 5px; /* Customize the stone spacing */
}
</style>