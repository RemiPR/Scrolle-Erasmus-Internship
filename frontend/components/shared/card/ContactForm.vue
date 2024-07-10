<template>
  <div class="flex justify-center text-left">
    <div class="bg-white rounded-lg shadow-2xl flex w-full max-w-5xl">
      <!-- Left Container -->
      <div
        class="w-full md:w-1/2 p-8 bg-white rounded-l-lg flex flex-col justify-between"
      >
        <div>
          <h2 class="text-3xl font-bold text-gray-800 mb-6">
            {{ $t("contact_heading") }}
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            {{ $t("contact_subheading") }}
          </p>
          <div class="space-y-4 mb-8">
            <div class="flex items-center">
              <Icon name="mdi:location" class="text-gray-600 w-6 h-6"></Icon>
              <p class="text-gray-600 ml-3 text-lg">
                68 B Graudu Iela, Riga 1058, Latvia
              </p>
            </div>
            <div class="flex items-center">
              <Icon
                name="ic:baseline-email"
                class="text-gray-600 w-6 h-6"
              ></Icon>
              <p class="text-gray-600 ml-3 text-lg">mudassir@turiba.lv</p>
            </div>
            <div class="flex items-center">
              <Icon
                name="ant-design:phone-filled"
                class="text-gray-600 w-6 h-6"
              ></Icon>
              <p class="text-gray-600 ml-3 text-lg">+37126371973</p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            {{ $t("contact_connect") }}
          </h3>
          <div class="flex space-x-8">
            <a
              href="#"
              class="text-gray-600 hover:text-blue-500 transition-colors w-8 h-8 flex items-center justify-center"
            >
              <Icon name="ant-design:facebook-filled" class="w-8 h-8"></Icon>
            </a>
            <a
              href="#"
              class="text-gray-600 hover:text-blue-500 transition-colors w-8 h-8 flex items-center justify-center"
            >
              <Icon name="simple-icons:x" class="w-7 h-7"></Icon>
            </a>
            <a
              href="#"
              class="text-gray-600 hover:text-blue-500 transition-colors w-8 h-8 flex items-center justify-center"
            >
              <Icon name="mdi:instagram" class="w-8 h-8"></Icon>
            </a>
            <a
              href="#"
              class="text-gray-600 hover:text-blue-500 transition-colors w-8 h-8 flex items-center justify-center"
            >
              <Icon name="ant-design:linkedin-filled" class="w-8 h-8"></Icon>
            </a>
          </div>
        </div>
      </div>

      <!-- Right Container -->
      <div class="w-full md:w-1/2 p-8 bg-gray-700 text-white rounded-r-lg">
        <h2 class="text-2xl font-bold mb-6 text-white">
          {{ $t("contact_form_title") }}
        </h2>
        <form class="space-y-6">
          <!-- Name -->
          <div>
            <label for="name" class="mb-2 block text-sm font-medium">
              {{ $t("contact_form_name") }}
            </label>
            <input
              id="name"
              type="text"
              class="w-full p-3 rounded-md text-black dark:text-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500"
              :placeholder="$t('contact_form_name_input')"
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="mb-2 block text-sm font-medium">
              {{ $t("contact_form_email") }}
            </label>
            <input
              id="email"
              type="email"
              class="w-full p-3 rounded-md text-black dark:text-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500"
              :placeholder="$t('contact_form_email_input')"
            />
          </div>

          <!-- Phone Number -->
          <div>
            <label for="phone" class="mb-2 block text-sm font-medium">
              {{ $t("contact_form_phone_number") }}
            </label>
            <input
              id="phone"
              type="tel"
              class="w-full p-3 rounded-md text-black dark:text-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500"
              :placeholder="$t('contact_form_phone_number_input')"
            />
          </div>

          <!-- Additional Information -->
          <div>
            <label for="additional-info" class="mb-2 block text-sm font-medium">
              {{ $t("contact_form_additional_information") }}
            </label>
            <textarea
              id="additional-info"
              rows="4"
              class="w-full p-3 rounded-md text-black dark:text-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500"
              :placeholder="$t('contact_form_additional_information_input')"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full p-3 rounded-md font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            {{ $t("contact_form_button") }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup></script>
