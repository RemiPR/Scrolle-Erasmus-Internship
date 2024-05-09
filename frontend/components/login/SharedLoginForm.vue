<template>
  <div>
    <form @submit.prevent="onSubmit" class="space-y-6">
      <!-- Email input field -->
      <div>
        <label for="email" class="font-semibold">Email address</label>
        <Field
          id="email"
          name="email"
          type="email"
          v-model="email"
          class="block w-full px-4 py-2 border rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
          :rules="rules.email"
          :class="{ 'border-red-500 dark:border-red-500': errors.email }"
        />
        <ErrorMessage
          name="email"
          class="flex items-center text-red-500 mt-1"
          v-if="errors.email"
          v-slot="{ message }"
        >
          <div class="flex items-center text-red-500 dark:text-gray-200 mt-1">
            <Icon
              name="material-symbols:error"
              class="mr-2 dark:text-red-500"
            />
            <span class="">{{ message }}</span>
          </div>
        </ErrorMessage>
      </div>

      <!-- Password input field -->
      <div class="relative flex flex-col">
        <label for="password" class="font-semibold">Password</label>
        <div class="relative">
          <Field
            :type="showPassword ? 'text' : 'password'"
            name="password"
            v-model="password"
            class="block w-full px-4 py-2 border rounded mt-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
            :rules="rules.password"
            :class="{ 'border-red-500 dark:border-red-500': errors.password }"
          />
          <span
            class="absolute inset-y-0 right-0 pr-3 flex items-center justify-center cursor-pointer"
            @click="toggleShowPassword"
          >
            <span class="material-icons select-none dark:font-semibold">
              {{ showPassword ? "hide" : "show" }}
            </span>
          </span>
        </div>
        <ErrorMessage
          name="password"
          v-if="errors.password"
          v-slot="{ message }"
        >
          <div class="flex items-center text-red-500 dark:text-gray-200 mt-1">
            <Icon
              name="material-symbols:error"
              class="mr-2 dark:text-red-500"
            />
            <span class="">{{ message }}</span>
          </div>
        </ErrorMessage>
      </div>
      <slot />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useForm, Field, ErrorMessage } from "vee-validate";
import { required, email as emailRule } from "@vee-validate/rules";

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const { handleSubmit, errors } = useForm({
  initialValues: { email, password },
});

const rules = {
  email: [required, emailRule],
  password: [required],
};

const onSubmit = handleSubmit((values) => {
  console.log(values);
  // Emit an event with the values for parent component handling
  emit("submit", values);
});

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};
</script>
