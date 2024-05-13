<template>
  <div class="">
    <div class="px-4 bg-white dark:bg-gray-800">
      <main class="text-center text-black dark:text-white w-3/4 mx-auto pb-32">
        <!-- Hero section -->
        <div
          class="h-screen flex flex-col justify-center items-center relative"
        >
          <!-- Added 'relative' here -->
          <div class="mb-24">
            <h1 class="text-5xl mb-8 font-bold text-gray-700 dark:text-white">
              {{ $t("page_title") }}
            </h1>
            <p class="text-3xl mb-12">{{ $t("page_subtitle") }}</p>
            <div>
              <p class="text-2xl mb-4">{{ $t("before_input_msg") }}</p>
              <!-- Input with CTA button -->
              <Form
                @submit="onCtaSubmit"
                :initial-values="ctaFormInitialValues"
                :validation-schema="ctaValidationSchema"
                validate-on-input
                v-slot="{ validateField }"
              >
                <div class="flex flex-col items-center mb-10 relative">
                  <div class="flex items-center">
                    <Field name="email" type="email" v-slot="{ field, meta }">
                      <input
                        v-bind="field"
                        v-model="ctaEmail"
                        @input="validateField('email')"
                        :placeholder="$t('email_field_placeholder')"
                        class="border-2 p-2 rounded-l-lg w-96 h-14 text-black dark:text-white hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
                        :class="{
                          'border-red-500 dark:border-red-500':
                            meta.touched && meta.invalid,
                        }"
                      />
                    </Field>
                    <NuxtLink
                      :to="loginLink"
                      @click.native="storeEmail"
                      class="text-white font-bold w-40 h-14 rounded-r-md flex items-center justify-center bg-gray-700 hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700 select-none"
                    >
                      {{ $t("email_input_btn") }}
                    </NuxtLink>
                    <ErrorMessage name="email" v-slot="{ message }">
                      <div
                        v-show="message"
                        class="text-red-500 dark:text-red-500 absolute mt-2 flex items-center top-full left-auto"
                      >
                        <Icon
                          name="material-symbols:error"
                          class="h-5 w-5 mr-2"
                        />
                        <span>{{ message }}</span>
                      </div>
                    </ErrorMessage>
                  </div>
                </div>
              </Form>
            </div>
          </div>
          <!-- Arrow positioned at the bottom -->
          <div
            class="absolute bottom-5 flex justify-center items-center cursor-pointer animate-bounce hover-effect"
            style="width: 80px; height: 80px"
            @click="scrollToSection"
          >
            <Icon
              name="heroicons-outline:arrow-down"
              class="h-20 w-14 text-gray-700 dark:text-white transition-all duration-300 ease-in-out hover:text-blue-500 dark:hover:text-blue-400"
              style="filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2))"
              alt="Down arrow"
            />
          </div>
        </div>
        <!-- Cards -->
        <div ref="firstSection" class="scroll-mt-28">
          <FlexibleTreeSection
            :title="$t('tree_section_one_title')"
            :content="$t('tree_section_one_content')"
            :imageSrc="FreeCourses"
            :circleColorClass="'bg-blue-600'"
            :circleBorderColor="'border-blue-500'"
            :textOnLeft="false"
            :index="0"
          />
          <FlexibleTreeSection
            :title="$t('tree_section_two_title')"
            :content="$t('tree_section_two_content')"
            :imageSrc="Communication"
            :circleColorClass="'bg-orange-600'"
            :circleBorderColor="'border-orange-500'"
            textOnLeft
            horizontalLineRight
            :index="1"
          />
          <FlexibleTreeSection
            :title="$t('tree_section_three_title')"
            :content="$t('tree_section_three_content')"
            :imageSrc="Grades"
            :circleColorClass="'bg-pink-500'"
            :circleBorderColor="'border-pink-400'"
            :index="2"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useLocalePath } from "#imports";
import { useForm, Field, ErrorMessage, Form } from "vee-validate";
import { object, string } from "yup";
import FlexibleTreeSection from "~/components/index/FlexibleTreeSection.vue";
import FreeCourses from "@/public/FreeCourses.jpg";
import Communication from "@/public/Communication.jpg";
import Grades from "@/public/Grades.jpg";
import { useCtaStore } from "~/stores/ctaStore";
import { nextTick } from "vue";

definePageMeta({
  layout: "nav",
});

const ctaStore = useCtaStore();
const localePath = useLocalePath();
const loginLink = computed(() => {
  const baseLoginPath = localePath("/login");
  return `${baseLoginPath}?register=true`;
});

const firstSection = ref(null);

const scrollToSection = async () => {
  await nextTick();
  if (firstSection.value) {
    firstSection.value.scrollIntoView({ behavior: "smooth" });
  }
};

// Initialize Vee Validate form
const ctaFormInitialValues = {
  email: "",
};
const ctaValidationSchema = object({
  email: string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),
});

const { handleSubmit, validateField } = useForm({
  validationSchema: ctaValidationSchema,
  initialValues: ctaFormInitialValues,
});

const ctaEmail = ref("");

const storeEmail = () => {
  ctaStore.setEmail(ctaEmail.value);
};

const onCtaSubmit = handleSubmit((values) => {
  ctaEmail.value = values.email;
  storeEmail();
});
definePageMeta({
  navigation: "index",
});
</script>

<style scoped>
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
.animate-bounce {
  animation: bounce 2s infinite;
}

/* Hover effect for arrow */
.hover-effect:hover::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  background: transparent;
  border: 2px solid rgba(59, 130, 246, 0.5); /* Tailwind blue-500 at 50% opacity */
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out;
}
</style>
