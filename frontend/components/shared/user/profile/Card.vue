<template>
  <div class="flex items-center">
    <div class="relative mr-4">
      <img :src="avatarUrl" alt="Avatar" class="h-16 w-16 rounded-full" />
      <!-- Edit button overlay -->
      <button
        @click="triggerFileInput"
        class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-xs h-full w-full rounded-full"
        title="Change avatar"
      >
        Edit
      </button>
      <input
        type="file"
        ref="fileInput"
        @change="handleFileChange"
        accept="image/png, image/jpeg, image/gif"
        hidden
      />
    </div>
    <div>
      <h2 class="text-xl font-bold text-gray-700">
        {{ user.name }} ({{ user.username }})
      </h2>
      <p class="text-gray-600">{{ user.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const avatarUrl = ref("/Grades.jpg"); // Default avatar URL or from props
const fileInput = ref(null);

// Function to simulate click on file input
function triggerFileInput() {
  fileInput.value.click();
}

// Function to handle file selection
function handleFileChange(event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    // Here you would handle the file, e.g., uploading it and updating the avatar URL
    avatarUrl.value = URL.createObjectURL(file);
  } else {
    alert("Please select a valid image file (PNG, JPEG, GIF).");
  }
}
</script>

<style scoped>
/* Styling for the edit button */
button {
  display: none; /* Hide by default */
}

/* Show the button on hover over the image area */
div.relative:hover button {
  display: flex;
}
</style>
