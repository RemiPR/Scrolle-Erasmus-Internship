<!-- components/EntranceRequirements.vue -->
<template>
  <div class="pb-24">
    <h4 class="text-3xl text-gray-700 mb-4">
      {{ $t("entrance_requirements_title") }}
    </h4>
    <h3 class="text-2xl my-8 font-semibold text-gray-800">
      {{ currentContent.title }}
    </h3>
    <div>
      <p
        v-for="(line, index) in formattedText"
        :key="index"
        class="text-left text-gray-800 text-xl tracking-wide"
      >
        <span v-if="line !== ''">{{ line }}</span>
        <br v-else />
      </p>
    </div>
    <div
      class="sticky bottom-0 bg-white py-4 flex justify-around text-lg font-bold"
    >
      <button
        @click="prevStep"
        :disabled="currentStep === 1"
        class="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 select-none flex items-center"
      >
        <span class="flex items-center">
          <Icon name="material-symbols:chevron-left" class="mr-1" />
          {{ $t("entrance_button_previous") }}
        </span>
      </button>
      <button
        @click="nextStep"
        :disabled="currentStep === 4"
        class="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white select-none flex items-center"
      >
        <span class="flex items-center">
          {{ $t("entrance_button_next") }}
          <Icon name="material-symbols:chevron-right" class="ml-1" />
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const currentStep = ref(1);

const content = [
  {
    title: t("entrance_requirements_content.title_one"),
    text: `${t(
      "entrance_requirements_content.part_one_text.paragraph_one"
    )}\n\n${t(
      "entrance_requirements_content.part_one_text.paragraph_two"
    )}\n\n${t(
      "entrance_requirements_content.part_one_text.paragraph_three"
    )}\n\n${t(
      "entrance_requirements_content.part_one_text.paragraph_four"
    )}\n\n${t(
      "entrance_requirements_content.part_one_text.paragraph_five"
    )}\n\n${t("entrance_requirements_content.part_one_text.paragraph_six")}`,
  },
  {
    title: t("entrance_requirements_content.title_two"),
    text: `${t(
      "entrance_requirements_content.part_two_text.paragraph_one"
    )}\n\n${t(
      "entrance_requirements_content.part_two_text.paragraph_two"
    )}\n\n${t(
      "entrance_requirements_content.part_two_text.paragraph_three"
    )}\n\n${t("entrance_requirements_content.part_two_text.paragraph_four")}`,
  },
  {
    title: t("entrance_requirements_content.title_three"),
    text: t("entrance_requirements_content.part_three_text.paragraph_one"),
  },
  {
    title: t("entrance_requirements_content.title_four"),
    text: `${t(
      "entrance_requirements_content.part_four_text.paragraph_one"
    )}\n\n${t(
      "entrance_requirements_content.part_four_text.paragraph_two"
    )}\n\n${t(
      "entrance_requirements_content.part_four_text.paragraph_three"
    )}\n\n${t(
      "entrance_requirements_content.part_four_text.paragraph_four"
    )}\n\n${t(
      "entrance_requirements_content.part_four_text.paragraph_five"
    )}\n\n${t(
      "entrance_requirements_content.part_four_text.paragraph_six"
    )}\n\n${t(
      "entrance_requirements_content.part_four_text.paragraph_seven"
    )}\n\n${t(
      "entrance_requirements_content.part_four_text.paragraph_eight"
    )}\n\n${t(
      "entrance_requirements_content.part_four_text.paragraph_nine"
    )}\n\n${t(
      "entrance_requirements_content.part_four_text.paragraph_ten"
    )}\n\n${t(
      "entrance_requirements_content.part_four_text.paragraph_eleven"
    )}\n\n${t(
      "entrance_requirements_content.part_four_text.paragraph_twelve"
    )}\n\n${t(
      "entrance_requirements_content.part_four_text.paragraph_thirteen"
    )}\n\n${t(
      "entrance_requirements_content.part_four_text.paragraph_fourteen"
    )}\n\n${t(
      "entrance_requirements_content.part_four_text.paragraph_fifteen"
    )}\n\n${t(
      "entrance_requirements_content.part_four_text.paragraph_sixteen"
    )}\n\n${t(
      "entrance_requirements_content.part_four_text.paragraph_seventeen"
    )}\n\n${t(
      "entrance_requirements_content.part_four_text.paragraph_eighteen"
    )}`,
  },
];

const currentContent = computed(() => content[currentStep.value - 1]);

const formattedText = computed(() => {
  // Split text by \n\n for paragraphs and \n for line breaks
  return currentContent.value.text.split("\n").map((line) => line.trim());
});

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const nextStep = () => {
  if (currentStep.value < 4) {
    currentStep.value++;
  }
};
</script>

<style scoped>
button:disabled {
  background-color: #e2e8f0; /* Tailwind CSS bg-gray-200 */
  color: #a0aec0; /* Tailwind CSS text-gray-400 */
  cursor: not-allowed;
}
</style>
