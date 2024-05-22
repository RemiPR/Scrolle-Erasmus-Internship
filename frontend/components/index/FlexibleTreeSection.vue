<template>
  <div
    class="flex flex-col md:flex-row items-center justify-center relative gap-x-4 lg:gap-y-32 md:gap-x-20"
  >
    <!-- Text content, conditionally placed before or after the vertical line -->
    <div
      :class="[
        'border-l-8 border-t border-t-gray-200 dark:border-t-0',
        'bg-white',
        'dark:bg-gray-700',
        'shadow-lg',
        'rounded-lg',
        'overflow-hidden',
        `${circleBorderColor}`,
        props.textOnLeft ? 'md:order-1' : 'md:order-3',
        'w-[650px]',
        'h-[300px]',
        'max-2xl:w-[450px]',
        'max-2xl:h-[225px]',
        'max-xl:w-[350px]',
        'max-xl:h-[150px]',
        'max-lg:w-[250px]',
        'max-lg:h-[150px]',
        'max-[900px]:order-1',
        'max-[900px]:my-12',
        'max-[900px]:w-[350px]',
        'max-[900px]:h-[150px]',
        'max-[900px]:flex',
        'max-[900px]:items-center',
        'max-[900px]:justify-center',
        'max-[900px]:mx-auto',
      ]"
    >
      <!-- Content here -->

      <div
        class="flex items-center justify-center space-x-4 md:space-x-8 h-full"
      >
        <!-- Move the indexed circle div to be in the same row as the title -->
        <div class="flex flex-col h-full items-center justify-center w-full">
          <div class="flex items-center justify-center mb-8 max-xl:mb-3">
            <div
              :class="`flex items-center justify-center min-w-[65px] h-[65px] ml-2 rounded-full text-white font-bold text-3xl max-2xl:text-2xl max-xl:text-lg max-lg:text-sm max-[900px]:text-lg max-2xl:min-w-[55px] max-2xl:h-[55px] max-xl:min-w-[35px] max-xl:h-[35px] max-lg:min-w-[20px] max-lg:h-[20px] max-[900px]:min-w-[35px] max-[900px]:h-[35px] ${circleColorClass}`"
            >
              {{ formattedIndex }}
            </div>
            <h2
              class="text-4xl font-bold text-gray-800 dark:text-white text-center ml-4 max-2xl:text-2xl max-xl:text-lg max-lg:text-base max-[900px]:text-2xl"
            >
              {{ props.title }}
            </h2>
          </div>
          <p
            class="text-2xl text-gray-700 dark:text-white font-medium max-2xl:text-lg max-xl:text-base max-lg:text-sm text-center max-w-[75%]"
          >
            {{ props.content }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center md:order-2">
      <IndexVLines
        :textOnLeft="props.textOnLeft"
        :circleBorderColor="circleBorderColor"
        :numLines="4"
        :showCircleWithLine="true"
        class="max-h-[300px] max-2xl:max-h-[225px] max-xl:max-h-[150px] max-[900px]:hidden"
      />
    </div>

    <!-- Image section, conditionally placed before or after the vertical line -->
    <div
      :class="[
        { 'md:order-3': props.textOnLeft, 'md:order-1': !props.textOnLeft },
        'w-[650px]',
        'h-[300px]',
        'max-2xl:w-[450px]',
        'max-2xl:h-[225px]',
        'max-xl:w-[350px]',
        'max-xl:h-[150px]',
        'max-lg:w-[250px]',
        'max-lg:h-[150px]',
        'max-[900px]:hidden',
      ]"
    >
      <img
        :src="props.imageSrc"
        alt="Description Image"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script setup>
// Define props
const props = defineProps({
  title: String,
  content: String,
  imageSrc: String,
  textOnLeft: Boolean,
  index: Number,
  borderColor: String,
  circleColorClass: String, // Full bg color class for index circle
  circleBorderColor: String, // Border color class for the middle vertical circle
});

const formattedIndex = computed(() => {
  if (typeof props.index === "number") {
    return (props.index + 1).toString().padStart(2, "0");
  }
  return "00";
});
</script>
