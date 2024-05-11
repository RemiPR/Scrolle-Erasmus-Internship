<template>
  <div>
    <div class="mx-auto px-4 bg-white dark:bg-gray-800">
      <main class="text-center text-black dark:text-white">
        <!-- Call to action -->
        <div class="h-screen flex flex-col justify-center items-center">
          <div class="mb-24">
            <h1 class="text-5xl mb-8 font-bold">{{ $t("page_title") }}</h1>
            <p class="text-3xl mb-12">{{ $t("page_subtitle") }}</p>
            <div class="">
              <p class="text-2xl mb-4">{{ $t("before_input_msg") }}</p>
              <!-- Input with CTA button -->
              <Form
                @submit="onCtaSubmit"
                :initial-values="ctaFormInitialValues"
                :validation-schema="ctaValidationSchema"
                validate-on-input
                v-slot="{ validateField }"
              >
                <div class="flex flex-col items-center mb-10">
                  <div class="flex items-center">
                    <Field name="email" type="email" v-slot="{ field, meta }">
                      <input
                        v-bind="field"
                        v-model="ctaEmail"
                        @input="validateField('email')"
                        :placeholder="$t('email_field_placeholder')"
                        class="border p-2 rounded-lg w-96 h-14 text-black hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
                        :class="{
                          'border-red-500 dark:border-red-500':
                            meta.touched && meta.invalid,
                        }"
                      />
                    </Field>
                    <NuxtLink
                      :to="loginLink"
                      @click.native="storeEmail"
                      class="text-white w-40 h-14 rounded-r-md ml-2 rounded-l-lg flex items-center justify-center bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                    >
                      {{ $t("email_input_btn") }}
                    </NuxtLink>
                  </div>
                  <ErrorMessage class="" name="email" v-slot="{ message }">
                    <div
                      class="flex items-center text-red-500 dark:text-gray-50 dark:font-semibold mt-2"
                    >
                      <Icon
                        name="material-symbols:error"
                        class="h-5 w-5 mr-2 dark:text-red-500"
                      />
                      <span>{{ message }}</span>
                    </div>
                  </ErrorMessage>
                </div>
              </Form>
            </div>
          </div>
          <!-- Arrow -->
          <div
            class="w-11 h-16 flex justify-center items-center cursor-pointer"
            @click="scrollToSection"
          >
            <Icon
              name="heroicons-outline:arrow-down"
              class="h-full w-full"
              alt="Down arrow"
            />
          </div>
        </div>
        <!-- Cards -->
        <TextLeftAd
          id="text-left-ad"
          SubtitleKey="text_left_ad_header1"
          ParagraphKey="text_left_ad_paragraph1"
          :Photo1="FreeCourses"
        />
        <TextRightAd />
        <TextLeftAd
          SubtitleKey="text_left_ad_header2"
          ParagraphKey="text_left_ad_paragraph2"
          :Photo1="Communication"
        />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useLocalePath } from "#imports";
import { useForm, Field, ErrorMessage, Form } from "vee-validate";
import { object, string } from "yup";
import TextLeftAd from "~/components/index/TextLeftAd.vue";
import TextRightAd from "~/components/index/TextRightAd.vue";
import FreeCourses from "@/public/FreeCourses.jpg";
import Communication from "@/public/Communication.jpg";
import { useCtaStore } from "~/stores/ctaStore";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/app.vue";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);

definePageMeta({
  layout: "nav",
});
const ctaStore = useCtaStore();
const localePath = useLocalePath();
const loginLink = computed(() => {
  const baseLoginPath = localePath("/login");
  return `${baseLoginPath}?register=true`;
});

const scrollToSection = () => {
  const targetSection = document.getElementById("text-left-ad");
  const offset = targetSection.offsetTop - 100;
  window.scrollTo({ top: offset, behavior: "smooth" });
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
</script>
