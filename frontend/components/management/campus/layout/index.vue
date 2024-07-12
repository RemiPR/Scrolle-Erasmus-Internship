<template>
  <div class="max-w-4xl mx-auto p-6">
    <h2 class="text-3xl font-semibold text-gray-700 mb-4">Campus Map</h2>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src="/campus.png" alt="Campus Layout" class="w-full h-auto" />
      <div class="p-6">
        <p class="text-gray-700 mb-4">
          Welcome to our campus! This map will help you navigate the various
          buildings and facilities. Use the legend below to identify key
          locations.
        </p>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Legend</h3>
            <ul class="list-disc list-inside text-gray-600">
              <li>Main Building</li>
              <li>Library</li>
              <li>Student Center</li>
              <li>Sports Complex</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Tips</h3>
            <ul class="list-disc list-inside text-gray-600">
              <li>Click on the image to zoom</li>
              <li>Use the search function for specific locations</li>
              <li>Check building opening hours before visiting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Add any necessary imports or logic here
</script>
