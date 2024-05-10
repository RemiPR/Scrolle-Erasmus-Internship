<!-- components/RegisterForm.vue -->
<template>
  <Form
    @submit="onSubmit"
    :initial-values="formInitialValues"
    :validation-schema="validationSchema"
    validate-on-input
    v-slot="{ validateField }"
  >
    <!-- First Name input -->
    <div class="mb-4">
      <label for="firstName" class="font-semibold">First Name</label>
      <Field
        id="firstName"
        name="firstName"
        type="text"
        v-slot="{ field, meta }"
      >
        <input
          v-bind="field"
          @input="validateField('firstName')"
          class="block w-full px-4 py-2 border rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
          :class="{
            'border-red-500 dark:border-red-500': meta.touched && meta.invalid,
          }"
        />
      </Field>
      <ErrorMessage name="firstName" v-slot="{ message }">
        <div
          class="flex items-center text-red-500 dark:text-gray-50 dark:font-semibold mt-1"
        >
          <Icon
            name="material-symbols:error"
            class="h-5 w-5 mr-2 dark:text-red-500"
          />
          <span>{{ message }}</span>
        </div>
      </ErrorMessage>
    </div>

    <!-- Last Name input -->
    <div class="mb-4">
      <label for="lastName" class="font-semibold">Last Name</label>
      <Field id="lastName" name="lastName" type="text" v-slot="{ field, meta }">
        <input
          v-bind="field"
          @input="validateField('lastName')"
          class="block w-full px-4 py-2 border rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
          :class="{
            'border-red-500 dark:border-red-500': meta.touched && meta.invalid,
          }"
        />
      </Field>
      <ErrorMessage name="lastName" v-slot="{ message }">
        <div
          class="flex items-center text-red-500 dark:text-gray-50 dark:font-semibold mt-1"
        >
          <Icon
            name="material-symbols:error"
            class="h-5 w-5 mr-2 dark:text-red-500"
          />
          <span>{{ message }}</span>
        </div>
      </ErrorMessage>
    </div>

    <!-- Email input field -->
    <div class="mb-4">
      <label for="email" class="font-semibold">Email address</label>
      <Field id="email" name="email" type="email" v-slot="{ field, meta }">
        <input
          v-bind="field"
          @input="validateField('email')"
          class="block w-full px-4 py-2 border rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
          :class="{
            'border-red-500 dark:border-red-500': meta.touched && meta.invalid,
          }"
        />
      </Field>
      <ErrorMessage name="email" v-slot="{ message }">
        <div
          class="flex items-center text-red-500 dark:text-gray-50 dark:font-semibold mt-1"
        >
          <Icon
            name="material-symbols:error"
            class="h-5 w-5 mr-2 dark:text-red-500"
          />
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
              'border-red-500 dark:border-red-500':
                meta.touched && meta.invalid,
            }"
          />
        </Field>
        <span
          class="absolute inset-y-0 right-0 pr-3 flex items-center justify-center cursor-pointer"
          @click="toggleShowPassword"
        >
          <span class="material-icons select-none dark:font-semibold">{{
            showPassword ? "hide" : "show"
          }}</span>
        </span>
      </div>
      <ErrorMessage name="password" v-slot="{ message }">
        <div
          class="flex items-center text-red-500 dark:text-gray-50 dark:font-semibold mt-1"
        >
          <Icon
            name="material-symbols:error"
            class="h-5 w-5 mr-2 dark:text-red-500"
          />
          <span>{{ message }}</span>
        </div>
      </ErrorMessage>
    </div>

    <!-- Confirm Password input field -->
    <div class="mb-6 relative flex flex-col">
      <label for="confirmPassword" class="font-semibold"
        >Confirm Password</label
      >
      <div class="relative">
        <Field name="confirmPassword" v-slot="{ field, meta }">
          <input
            v-bind="field"
            @input="validateField('confirmPassword')"
            :type="showConfirmPassword ? 'text' : 'password'"
            class="block w-full px-4 py-2 border rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :class="{
              'border-red-500 dark:border-red-500':
                meta.touched && meta.invalid,
            }"
          />
        </Field>
        <span
          class="absolute inset-y-0 right-0 pr-3 flex items-center justify-center cursor-pointer"
          @click="toggleShowConfirmPassword"
        >
          <span class="material-icons select-none dark:font-semibold">{{
            showConfirmPassword ? "hide" : "show"
          }}</span>
        </span>
      </div>
      <ErrorMessage name="confirmPassword" v-slot="{ message }">
        <div
          class="flex items-center text-red-500 dark:text-gray-50 dark:font-semibold mt-1"
        >
          <Icon
            name="material-symbols:error"
            class="h-5 w-5 mr-2 dark:text-red-500"
          />
          <span>{{ message }}</span>
        </div>
      </ErrorMessage>
    </div>

    <!-- Register button -->
    <button
      type="submit"
      class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 select-none"
    >
      Register
    </button>
  </Form>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useForm, Field, ErrorMessage, Form } from "vee-validate";
import { object, string } from "yup";
import { useCtaStore } from "@/stores/ctaStore";

const props = defineProps({
  initialEmail: {
    type: String,
    default: "",
  },
});

const ctaStore = useCtaStore();
const showPassword = ref(false);
const showConfirmPassword = ref(false);

// Use computed to generate the initial values for the form
const formInitialValues = computed(() => ({
  firstName: "",
  lastName: "",
  email: props.initialEmail || ctaStore.email || "",
  password: "",
  confirmPassword: "",
}));

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

const toggleShowConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

const validationSchema = object({
  firstName: string()
    .required("Please enter your first name")
    .min(2, "First name must be at least 2 characters"),
  lastName: string()
    .required("Please enter your last name")
    .min(2, "Last name must be at least 2 characters"),
  email: string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),
  password: string()
    .required("Please enter your password")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
  confirmPassword: string()
    .required("Please confirm your password")
    .oneOf([ref("password").value], "Passwords must match"),
});

const { handleSubmit, validateField } = useForm({
  validationSchema,
});

const onSubmit = handleSubmit((values) => {
  console.log(JSON.stringify(values, null, 2));
  // Clear CTA email from store once registration is complete
  ctaStore.clearEmail();
});
</script>
