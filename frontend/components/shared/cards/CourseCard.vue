<template>
  <div class="row">
    <div
      v-for="i in 2"
      :key="i"
      class="tile"
      @mouseover="handleMouseOver"
      @mouseout="handleMouseOut"
      ref="tile"
    >
      <div class="overlay">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="play-circle"
          class="svg-inline--fa fa-play-circle fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const tilesRef = ref([]);

onMounted(() => {
  tilesRef.value = Array.from(document.querySelectorAll(".tile"));
});

const handleMouseOver = (event) => {
  const index = tilesRef.value.indexOf(event.currentTarget);
  tilesRef.value.forEach((tile, i) => {
    const pastTarget = i < index;
    const futureTarget = i > index;
    tile.classList.toggle("shiftLeft", pastTarget);
    tile.classList.toggle("shiftRight", futureTarget);
    if (pastTarget || futureTarget) {
      tile.classList.add("darker");
    }
  });
};

const handleMouseOut = () => {
  tilesRef.value.forEach((tile) => {
    tile.classList.remove("shiftLeft", "shiftRight", "darker");
  });
};
</script>

<style scoped>
body {
  background-color: black;
}

.row {
  display: flex;
  margin: 200px 40px;
}

.tile {
  margin: 5px;
  min-width: 200px;
  height: 130px;
  background-color: #9d0208;
  color: white;
  font-size: 20px;
  transition: transform 500ms, opacity 500ms;
  transform-origin: 50% 50%;
  position: relative;
}

.overlay {
  background-color: #9d0208;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 500ms;
  position: absolute;
  top: 0;
  color: white;
}

svg {
  width: 25%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.tile:hover {
  transform: scale(1.5);
}

.tile:hover .overlay {
  opacity: 1;
}

.shiftLeft {
  transform: translate3d(-50px, 0, 0);
}

.shiftRight {
  transform: translate3d(50px, 0, 0);
}

.darker {
  opacity: 0.5;
}
</style>
