<!-- SharedLoginForm.vue -->
<template>
  <Form
    @submit="onSubmit"
    :validation-schema="validationSchema"
    validate-on-input
    v-slot="{ validateField }"
    class="space-y-6"
  >
    <!-- Email input field -->
    <div class="mb-4">
      <label for="email" class="font-semibold">Email address</label>
      <Field id="email" name="email" type="email" v-slot="{ field, meta }">
        <input
          v-bind="field"
          @input="validateField('email')"
          class="block w-full px-4 py-2 border rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
          :class="{
            'border-red-500 dark:border-red-500': meta.touched && meta.error,
          }"
        />
      </Field>
      <ErrorMessage name="email" v-slot="{ message }">
        <div class="flex items-center text-red-500 dark:text-gray-200 mt-1">
          <Icon name="material-symbols:error" class="mr-2 dark:text-red-500" />
          <span>{{ message }}</span>
        </div>
      </ErrorMessage>
    </div>

    <!-- Password input field -->
    <div class="mb-4 relative flex flex-col">
      <label for="password" class="font-semibold">Password</label>
      <div class="relative">
        <Field name="password" v-slot="{ field, meta }">
          <input
            v-bind="field"
            @input="validateField('password')"
            :type="showPassword ? 'text' : 'password'"
            class="block w-full px-4 py-2 border rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500': meta.touched && meta.error,
            }"
          />
        </Field>
        <span
          class="absolute inset-y-0 right-0 pr-3 flex items-center justify-center cursor-pointer"
          @click="toggleShowPassword"
        >
          <span class="material-icons select-none dark:font-semibold">
            {{ showPassword ? "hide" : "show" }}
          </span>
        </span>
      </div>
      <ErrorMessage name="password" v-slot="{ message }">
        <div class="flex items-center text-red-500 dark:text-gray-200 mt-1">
          <Icon name="material-symbols:error" class="mr-2 dark:text-red-500" />
          <span>{{ message }}</span>
        </div>
      </ErrorMessage>
    </div>

    <!-- Slot for Remember Me, Submit Button, etc. -->
    <slot />
  </Form>
</template>

<script setup>
import { ref } from "vue";
import { useForm, Field, ErrorMessage, Form } from "vee-validate";
import { object, string } from "yup";

// Defines and toggles between password and text
const showPassword = ref(false);
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

const validationSchema = object({
  email: string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),
  password: string().required("Please enter your password"),
});

const props = defineProps({
  onSubmit: {
    type: Function,
    required: true,
  },
});

const emit = defineEmits(["submit"]);

const { handleSubmit, validateField } = useForm({
  validationSchema,
});

const onSubmit = handleSubmit((values) => {
  emit("submit", values);
});
</script>
