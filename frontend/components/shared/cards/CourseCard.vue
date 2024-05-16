<template>
  <div class="flex flex-wrap gap-5">
    <div
      v-for="i in 2"
      :key="i"
      class="bg-white rounded overflow-hidden relative w-72 transition-transform duration-300 origin-top-center"
      :class="{
        'border border-gray-300': hoveredTileIndex === i,
        'scale-105': hoveredTileIndex === i,
      }"
      @mouseover="handleMouseOver(i)"
      @mouseout="handleMouseOut"
    >
      <div class="relative">
        <img
          class="w-full h-auto"
          src="/Grades.jpg"
          alt="Sunset in the mountains"
        />
        <div
          class="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300"
          :class="{ 'opacity-100': hoveredTileIndex === i }"
        >
          <Icon name="bi:play-circle" class="text-white text-4xl" />
        </div>
      </div>
      <!-- Title -->
      <div class="bg-blue-500 text-white text-lg text-center py-2">
        Aesthetic Cosmetology
      </div>
      <!-- Hidden content -->
      <div
        class="opacity-0 transition-opacity duration-500 overflow-hidden"
        :class="{ 'opacity-100': hoveredTileIndex === i }"
      >
        <div class="px-4 py-2 text-sm text-gray-700 mt-4">
          <div class="flex flex-col gap-5">
            <div class="flex items-center">
              <Icon
                name="fluent-mdl2:health-solid"
                class="text-black text-2xl"
              />
              <p class="ml-2">Health & Medicine</p>
            </div>
            <div class="flex items-center">
              <Icon name="carbon:user-avatar" class="text-black text-2xl" />
              <p class="ml-2">Jose Portilla</p>
            </div>
            <div class="flex items-center">
              <Icon name="carbon:calendar" class="text-black text-2xl" />
              <p class="ml-2"><span class="font-bold">10</span> Weeks long</p>
            </div>
            <div
              class="flex flex-col sm:flex-row justify-between items-center my-2"
            >
              <button class="text-white bg-blue-600 px-4 py-2 mr-2 sm:mr-0">
                Read more
              </button>
              <div class="w-full sm:w-auto sm:ml-4 text-right">
                <p>Start date:</p>
                <p class="font-bold">2024/07/01</p>
                <p class="font-bold">18:00 - 19:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const hoveredTileIndex = ref(null);

const handleMouseOver = (index) => {
  hoveredTileIndex.value = index;
};

const handleMouseOut = () => {
  hoveredTileIndex.value = null;
};
</script>
