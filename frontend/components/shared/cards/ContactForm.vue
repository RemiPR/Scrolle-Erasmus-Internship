<template>
  <div class="flex justify-center text-left">
    <div class="bg-white rounded-xl shadow-2xl flex w-full max-w-5xl">
      <!-- Left Container -->
      <div class="w-full md:w-1/2 p-8 bg-white">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">
          Let's get in touch
        </h2>
        <p class="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          doloroum adipisci recusandae praesentium dicta!
        </p>
        <div class="flex items-center mb-4">
          <Icon name="mdi:location" class="text-gray-600"></Icon>
          <p class="text-gray-600 ml-2">92 Cherry Drive Uniondale, NY 11553</p>
        </div>
        <div class="flex items-center mb-4">
          <Icon name="ic:baseline-email" class="text-gray-600"></Icon>
          <p class="text-gray-600 ml-2">lorem@ipsum.com</p>
        </div>
        <div class="flex items-center mb-6">
          <Icon name="ant-design:phone-filled" class="text-gray-600"></Icon>
          <p class="text-gray-600 ml-2">123-456-789</p>
        </div>
        <div>
          <h1 class="mb-4 dark:text-black">Connect with us :</h1>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-600">
              <Icon
                name="ant-design:facebook-filled"
                class="text-gray-600 h-10 w-10"
              ></Icon>
            </a>
            <a href="#" class="text-gray-600">
              <Icon
                name="ant-design:twitter-square-filled"
                class="text-gray-600 h-10 w-10"
              ></Icon>
            </a>
            <a href="#" class="text-gray-600">
              <Icon
                name="mage:instagram-square"
                class="text-gray-600 h-10 w-10"
              ></Icon>
            </a>
            <a href="#" class="text-gray-600">
              <Icon
                name="ant-design:linkedin-filled"
                class="text-gray-600 h-10 w-10"
              ></Icon>
            </a>
          </div>
        </div>
      </div>

      <!-- Right Container -->
      <div class="w-full md:w-1/2 p-8 bg-gray-700 text-white rounded-r-lg">
        <h2 class="text-3xl font-bold mb-6 text-white dark:text-white">
          {{ $t("contact_form_title") }}
        </h2>
        <form class="space-y-4">
          <!-- Name -->
          <div>
            <label for="name" class="mb-4 block text-xl font-semibold">
              {{ $t("contact_form_name") }}
            </label>
            <input
              id="name"
              type="text"
              class="w-full p-3 rounded-lg text-black dark:text-white border-2 border-gray-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
              :placeholder="$t('contact_form_name_input')"
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="mb-4 block text-xl font-semibold">
              {{ $t("contact_form_email") }}
            </label>
            <input
              id="email"
              type="email"
              class="w-full p-3 rounded-lg text-black dark:text-white border-2 border-gray-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
              :placeholder="$t('contact_form_email_input')"
            />
          </div>

          <!-- Phone Number -->
          <div>
            <label for="phone" class="mb-4 block text-xl font-semibold">
              {{ $t("contact_form_phone_number") }}
            </label>
            <input
              id="phone"
              type="tel"
              class="w-full p-3 rounded-lg text-black dark:text-white border-2 border-gray-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
              :placeholder="$t('contact_form_phone_number_input')"
            />
          </div>

          <!-- Additional Information -->
          <div>
            <label
              for="additional-info"
              class="mb-4 block text-xl font-semibold"
            >
              {{ $t("contact_form_additional_information") }}
            </label>
            <textarea
              id="additional-info"
              rows="4"
              class="w-full p-3 rounded-lg text-black dark:text-white border-2 border-gray-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
              :placeholder="$t('contact_form_additional_information_input')"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full p-3 rounded-lg font-bold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition duration-150 ease-in-out dark:hover:border-blue-600"
          >
            {{ $t("contact_form_button") }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup></script>
