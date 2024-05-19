<template>
  <div class="flex justify-center text-left bg-gray-100">
    <div class="bg-white rounded-lg shadow-lg flex w-full max-w-5xl">
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
          <Icon name="mdi:location" class="text-blue-500"></Icon>
          <p class="text-gray-600 ml-2">92 Cherry Drive Uniondale, NY 11553</p>
        </div>
        <div class="flex items-center mb-4">
          <Icon name="ic:baseline-email" class="text-blue-500"></Icon>

          <p class="text-gray-600 ml-2">lorem@ipsum.com</p>
        </div>
        <div class="flex items-center mb-6">
          <Icon name="ant-design:phone-filled" class="text-blue-500"></Icon>
          <p class="text-gray-600 ml-2">123-456-789</p>
        </div>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-600"
            ><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="..." /></svg
          ></a>
          <a href="#" class="text-gray-600"
            ><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="..." /></svg
          ></a>
          <a href="#" class="text-gray-600"
            ><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="..." /></svg
          ></a>
          <a href="#" class="text-gray-600"
            ><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="..." /></svg
          ></a>
        </div>
      </div>

      <!-- Right Container -->
      <div class="w-full md:w-1/2 p-8 bg-gray-800 text-white rounded-r-lg">
        <h2 class="text-3xl font-bold mb-6">{{ $t("contact_form_title") }}</h2>
        <form class="space-y-4">
          <!-- Name -->
          <div>
            <label for="name" class="block text-lg font-semibold">{{
              $t("contact_form_name")
            }}</label>
            <input
              id="name"
              type="text"
              class="w-full p-3 rounded-lg text-black"
              :placeholder="$t('contact_form_name_input')"
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-lg font-semibold">{{
              $t("contact_form_email")
            }}</label>
            <input
              id="email"
              type="email"
              class="w-full p-3 rounded-lg text-black"
              :placeholder="$t('contact_form_email_input')"
            />
          </div>

          <!-- Phone Number -->
          <div>
            <label for="phone" class="block text-lg font-semibold">{{
              $t("contact_form_phone_number")
            }}</label>
            <input
              id="phone"
              type="tel"
              class="w-full p-3 rounded-lg text-black"
              :placeholder="$t('contact_form_phone_number_input')"
            />
          </div>

          <!-- Additional Information -->
          <div>
            <label for="additional-info" class="block text-lg font-semibold">{{
              $t("contact_form_additional_information")
            }}</label>
            <textarea
              id="additional-info"
              rows="4"
              class="w-full p-3 rounded-lg text-black"
              :placeholder="$t('contact_form_additional_information_input')"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-white text--500 py-2 px-4 rounded hover:bg-gray-100 transition duration-150"
          >
            {{ $t("contact_form_button") }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
