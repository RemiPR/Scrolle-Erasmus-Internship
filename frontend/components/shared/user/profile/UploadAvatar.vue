<template>
  <div class="avatar-upload">
    <NuxtImg
      loading="lazy"
      :src="avatarUrl"
      alt="User Avatar"
      class="avatar rounded-full"
    />
    <button @click="triggerFileInput" class="edit-button">Edit</button>
    <input type="file" ref="fileInput" @change="handleFileChange" hidden />
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  initialAvatarUrl: {
    type: String,
    default: "default-avatar.png",
  },
});

const avatarUrl = ref(props.initialAvatarUrl);
const fileInput = ref(null);

function triggerFileInput() {
  fileInput.value.click();
}

function handleFileChange(event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    // Handle file upload here
    uploadAvatar(file);
  }
}

async function uploadAvatar(file) {
  const formData = new FormData();
  formData.append("avatar", file);

  try {
    // Assume you have an API setup to handle the upload
    await $fetch("/api/upload-avatar", {
      method: "POST",
      body: formData,
    });
    // Optionally update the avatarUrl to the new avatar's URL after upload
    // avatarUrl.value = URL.createObjectURL(file);
  } catch (error) {
    console.error("Failed to upload avatar:", error);
  }
}
</script>

<style scoped>
.avatar-upload {
  position: relative;
  display: inline-block;
}
.avatar {
  width: 100px; /* or your preferred size */
  height: 100px;
  object-fit: cover;
}
.edit-button {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 4px 8px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  cursor: pointer;
}
input[type="file"] {
  display: none;
}
</style>
