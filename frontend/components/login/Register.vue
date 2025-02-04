<!-- components/RegisterForm.vue -->
<template>
  <div class="max-w-md mx-auto mt-8">
    <form @submit.prevent="onSubmit">
      <!-- First Name input -->
      <div class="mb-4">
        <label for="firstName" class="font-semibold">{{
          $t("register_first_name")
        }}</label>
        <input
          v-model="firstName"
          v-bind="firstNameAttrs"
          class="block w-full px-4 py-2 border rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
          :class="{
            'border-red-500 dark:border-red-500': errors.firstName,
            autofilled: isAutofilled,
          }"
        />
        <span class="text-red-500">{{ errors.firstName }}</span>
      </div>

      <!-- Last Name input -->
      <div class="mb-4">
        <label for="lastName" class="font-semibold">{{
          $t("register_last_name")
        }}</label>
        <input
          v-model="lastName"
          v-bind="lastNameAttrs"
          class="block w-full px-4 py-2 border rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
          :class="{
            'border-red-500 dark:border-red-500': errors.lastName,
            autofilled: isAutofilled,
          }"
        />
        <span class="text-red-500">{{ errors["lastName"] }}</span>
      </div>

      <!-- Email input field -->
      <div class="mb-4">
        <label for="email" class="font-semibold">{{
          $t("register_email_adress")
        }}</label>
        <input
          v-model="email"
          v-bind="emailAttrs"
          type="email"
          class="block w-full px-4 py-2 border rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out bg-green- dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
          :class="{
            'border-red-500 dark:border-red-500': errors.email,
            autofilled: isAutofilled,
          }"
        />
        <span class="text-red-500">{{ errors["email"] }}</span>
      </div>

      <!-- Password input field -->
      <div class="mb-4 relative">
        <label for="password" class="font-semibold">{{
          $t("register_password")
        }}</label>
        <div class="relative">
          <input
            v-model="password"
            v-bind="passwordAttrs"
            :type="showPassword ? 'text' : 'password'"
            class="block w-full px-4 py-2 border rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white pr-10"
            :class="{
              'border-red-500 dark:border-red-500': errors.password,
              autofilled: isAutofilled,
            }"
          />
          <span
            class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            @click="toggleShowPassword"
          >
            <span class="material-icons select-none dark:font-semibold">
              {{
                showPassword
                  ? $t("register_show_password.hide")
                  : $t("register_show_password.show")
              }}
            </span>
          </span>
        </div>
        <span class="text-red-500">{{ errors["password"] }}</span>
      </div>

      <!-- Confirm Password input field -->
      <div class="mb-6 relative">
        <label for="confirmPassword" class="font-semibold">{{
          $t("register_confirm_password")
        }}</label>
        <div class="relative">
          <input
            v-model="confirmPassword"
            v-bind="confirmPasswordAttrs"
            :type="showConfirmPassword ? 'text' : 'password'"
            class="block w-full px-4 py-2 border rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white pr-10"
            :class="{
              'border-red-500 dark:border-red-500': errors.confirmPassword,
              autofilled: isAutofilled,
            }"
          />
          <span
            class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            @click="toggleShowConfirmPassword"
          >
            <span class="material-icons select-none dark:font-semibold">
              {{
                showPassword
                  ? $t("register_show_confirm_password.hide")
                  : $t("register_show_confirm_password.show")
              }}</span
            >
          </span>
        </div>
        <span class="text-red-500">{{ errors["confirmPassword"] }}</span>
      </div>

      <!-- Register button -->
      <button
        type="submit"
        class="w-full font-semibold text-white px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 select-none"
      >
        {{ $t("register_button") }}
      </button>
    </form>
    <!-- Social Media Options -->
    <div class="flex items-center my-6">
      <hr class="text-black flex-grow" />
      <p class="mx-4 font-semibold">{{ $t("register_or_continue_with") }}</p>
      <hr class="text-black flex-grow" />
    </div>
    <div class="mt-1 flex justify-between">
      <button
        class="group text-gray-800 px-8 py-3 rounded border border-gray-300 hover:bg-gray-100 hover:text-gray-900 flex items-center dark:bg-white dark:hover:bg-gray-200"
        @click="loginWithGoogle(config)"
        type="button"
      >
        <Icon name="logos:google-icon" class="mr-2" alt="Google Logo" />
        <span class="font-semibold group-hover:text-black select-none"
          >Google</span
        >
      </button>
      <button
        @click="loginWithFacebook(config)"
        type="button"
        class="group text-gray-800 px-6 py-3 rounded border border-gray-300 hover:bg-gray-100 hover:text-gray-900 flex items-center dark:bg-white dark:hover:bg-gray-200"
      >
        <Icon name="logos:facebook" class="mr-2" alt="Facebook Logo" />
        <span class="font-semibold group-hover:text-black select-none"
          >Facebook</span
        >
      </button>
    </div>
  </div>
</template>

<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useI18n } from "vue-i18n";
import { useLocalePath } from "#imports";
import { navigateTo } from "#app";

const { t } = useI18n();
const localePath = useLocalePath();
const config = useRuntimeConfig();

const props = defineProps({
  prefilledEmail: {
    type: String,
    default: "",
  },
});

const schema = yup.object({
  firstName: yup
    .string()
    .required(t("register_validation.firstName.required"))
    .min(2, t("register_validation.firstName.min")),
  lastName: yup
    .string()
    .required(t("register_validation.lastName.required"))
    .min(2, t("register_validation.lastName.min")),
  email: yup
    .string()
    .email(t("register_validation.email.invalid"))
    .required(t("register_validation.email.required")),
  password: yup
    .string()
    .required(t("register_validation.password.required"))
    .min(8, t("register_validation.password.min"))
    .matches(/[A-Z]/, t("register_validation.password.uppercase"))
    .matches(/[0-9]/, t("register_validation.password.number"))
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      t("register_validation.password.special")
    ),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      t("register_validation.confirmPassword.match")
    )
    .required(t("register_validation.confirmPassword.required")),
});

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: schema,
});

const [firstName, firstNameAttrs] = defineField("firstName");
const [lastName, lastNameAttrs] = defineField("lastName");
const [email, emailAttrs] = defineField("email");
email.value = props.prefilledEmail;
const [password, passwordAttrs] = defineField("password");
const [confirmPassword, confirmPasswordAttrs] = defineField("confirmPassword");

const isAutofilled = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

const toggleShowConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

async function loginWithGoogle(baseAuthUrl) {
  window.location.href = `${baseAuthUrl.public.authBaseUrl}/api/oauth/google`;
}
function loginWithFacebook(baseAuthUrl) {
  window.location.href = `${baseAuthUrl.public.authBaseUrl}/api/oauth/facebook`;
}

const onSubmit = handleSubmit(async (values) => {
  try {
    const response = await $fetch(
      `${config.public.authBaseUrl}/api/auth/guest/register`,
      {
        method: "POST",
        body: {
          name: values.firstName,
          surname: values.lastName,
          email: values.email,
          password: values.password,
        },
        credentials: "include",
      }
    );
    navigateTo(localePath("/guest"));
  } catch (error) {
    if (error.data && error.status == 409) {
      console.log("Registration failed:", error.data.message);
    } else {
      console.error(error);
    }
  }
});

onMounted(() => {
  const inputFields = document.querySelectorAll("input");
  inputFields.forEach((input) => {
    input.addEventListener("animationstart", handleAutofill);
  });
});

const handleAutofill = (event) => {
  if (event.animationName === "onAutoFillStart") {
    isAutofilled.value = true;
  } else if (event.animationName === "onAutoFillCancel") {
    isAutofilled.value = false;
  }
};
</script>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px rgb(134 239 172) inset !important; /* Change the background color here */
}
</style>
