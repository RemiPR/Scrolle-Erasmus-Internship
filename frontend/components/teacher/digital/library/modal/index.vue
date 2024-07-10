<template>
  <Transition name="modal-fade">
    <div
      v-if="isVisible"
      class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-hidden"
      @click.self="closeModal"
    >
      <Transition name="modal-scale">
        <div
          v-if="isVisible"
          class="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
        >
          <div class="flex justify-between items-center p-6 border-b">
            <h2 class="text-2xl font-bold text-gray-700">
              {{ resource.title }}
            </h2>
            <button
              @click="closeModal"
              class="text-gray-600 hover:text-gray-900 focus:outline-none p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex-grow overflow-y-auto p-6">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="font-semibold text-sm text-gray-700">
                  {{ $t("subject") }}
                </p>
                <p>{{ resource.subject }}</p>
              </div>
              <div>
                <p class="font-semibold text-sm text-gray-700">
                  {{ $t("subTopic") }}
                </p>
                <p>{{ resource.subTopic }}</p>
              </div>
              <div>
                <p class="font-semibold text-sm text-gray-700">
                  {{ $t("resourceType") }}
                </p>
                <p>{{ resource.resourceType }}</p>
              </div>
              <div>
                <p class="font-semibold text-sm text-gray-700">
                  {{ $t("author") }}
                </p>
                <p>{{ resource.author }}</p>
              </div>
              <div>
                <p class="font-semibold text-sm text-gray-700">
                  {{ $t("institution") }}
                </p>
                <p>{{ resource.institution }}</p>
              </div>
              <div>
                <p class="font-semibold text-sm text-gray-700">
                  {{ $t("language") }}
                </p>
                <p>{{ resource.language }}</p>
              </div>
              <div>
                <p class="font-semibold text-sm text-gray-700">
                  {{ $t("publishDate") }}
                </p>
                <p>{{ resource.publishDate }}</p>
              </div>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">
                {{ $t("abstract") }}
              </h3>
              <p class="text-gray-600">{{ resource.abstract }}</p>
            </div>
          </div>
          <div class="p-6 border-t">
            <button
              class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
            >
              {{ $t("downloadResource") }}
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  resource: Object,
});

const emit = defineEmits(["close"]);

const isVisible = ref(true);

function closeModal() {
  isVisible.value = false;
  setTimeout(() => emit("close"), 300); // Delay to allow transition to complete
}

function disableBodyScroll() {
  document.body.style.overflow = "hidden";
}

function enableBodyScroll() {
  document.body.style.overflow = "";
}

onMounted(() => {
  disableBodyScroll();
});

onUnmounted(() => {
  enableBodyScroll();
});
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-scale-enter-active,
.modal-scale-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-scale-enter-from,
.modal-scale-leave-to {
  transform: scale(0.9);
  opacity: 0;
}
</style>
