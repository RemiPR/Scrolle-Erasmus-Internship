<!-- components/Form.vue -->
<template>
  <div>
    <p class="text-3xl mt-48 mb-20 font-bold text-gray-700 dark:text-white">
      Contact us !
    </p>
  </div>
  <form class="max-w-xl mx-auto p-4 flex flex-wrap">
    <!-- First Name -->
    <div class="w-full md:w-1/2 mb-4 md:pr-2">
      <label
        for="first-name"
        class="block text-white font-semibold text-lg mb-2"
        >First Name</label
      >
      <input
        id="first-name"
        type="text"
        class="border-2 p-3 rounded-lg w-full h-14 text-black dark:text-white hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
        placeholder="Enter your first name"
      />
    </div>

    <!-- Last Name -->
    <div class="w-full md:w-1/2 mb-4 md:pl-2">
      <label for="last-name" class="block text-white font-semibold text-lg mb-2"
        >Last Name</label
      >
      <input
        id="last-name"
        type="text"
        class="border-2 p-3 rounded-lg w-full h-14 text-black dark:text-white hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
        placeholder="Enter your last name"
      />
    </div>

    <!-- Email -->
    <div class="w-full md:w-1/2 mb-4 md:pr-2">
      <label for="email" class="block text-white font-semibold text-lg mb-2"
        >Email</label
      >
      <input
        id="email"
        type="email"
        class="border-2 p-3 rounded-lg w-full h-14 text-black dark:text-white hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
        placeholder="Enter your email address"
      />
    </div>

    <!-- Phone Number -->
    <div class="w-full md:w-1/2 mb-4 md:pl-2">
      <label for="phone" class="block text-white font-semibold text-lg mb-2"
        >Phone Number</label
      >
      <input
        id="phone"
        type="tel"
        class="border-2 p-3 rounded-lg w-full h-14 text-black dark:text-white hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
        placeholder="Enter your phone number"
      />
    </div>

    <!-- Additional Information -->
    <div class="w-full mb-4">
      <label
        for="additional-info"
        class="block text-white font-semibold text-lg mb-2"
        >Additional Information</label
      >
      <textarea
        id="additional-info"
        rows="4"
        class="border-2 p-3 rounded-lg w-full h-14 text-black dark:text-white hover:border-blue-500 focus:border-blue-500 focus:outline-none transition duration-150 ease-in-out dark:bg-gray-600 dark:border-gray-500 dark:hover:border-gray-400 dark:focus:border-white"
        placeholder="Enter any additional information"
      ></textarea>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
    >
      Submit
    </button>
  </form>
</template>
