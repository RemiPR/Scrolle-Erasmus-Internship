<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Current Assignments</h1>

    <!-- To be completed -->
    <section>
      <h2 class="text-2xl font-semibold mb-2 mt-24 text-left">
        To be completed :
      </h2>
      <ul class="space-y-4">
        <li class="relative my-16">
          <span class="absolute left-0 top-0 mt-2 ml-2 list-decimal">1.</span>
          <div class="ml-20 space-y-4">
            <div class="flex space-x-32 text-left font-semibold">
              <p class="w-1/3">Name:</p>
              <p class="w-1/3">Assignment notes:</p>
              <p class="w-1/3">Date to be completed by:</p>
            </div>
            <hr class="mb-10 border-gray-300" />
            <div class="flex space-x-32 text-left">
              <p class="w-1/3">Programming with Python</p>
              <p class="w-1/3">
                Must use python programming language to complete the assignment.
              </p>
              <p class="w-1/3">2024/05/29 10:00</p>
            </div>
          </div>

          <!-- Button added here -->
          <div class="flex justify-end mt-4">
            <button class="bg-gray-600 text-white rounded-md px-4 py-2">
              Turn in
            </button>
          </div>
        </li>
        <!-- Add more to-be-completed assignments here, following the same structure -->
        <li class="relative mt-10">
          <span class="absolute left-0 top-0 mt-2 ml-2 list-decimal">1.</span>
          <div class="ml-20 space-y-4">
            <div class="flex space-x-32 text-left font-semibold">
              <p class="w-1/3">Name:</p>
              <p class="w-1/3">Assignment notes:</p>
              <p class="w-1/3">Date to be completed by:</p>
            </div>
            <hr class="mt-4 border-gray-300" />
            <div class="flex space-x-32 text-left">
              <p class="w-1/3">Programming with Python</p>
              <p class="w-1/3">
                Must use python programming language to complete the assignment.
              </p>
              <p class="w-1/3">2024/05/29 10:00</p>
            </div>
          </div>

          <!-- Button added here -->
          <div class="flex justify-end mt-4">
            <button class="bg-gray-600 text-white rounded-md px-4 py-2">
              Turn in
            </button>
          </div>
        </li>
      </ul>
      <h2 class="text-2xl font-semibold mb-2 mt-24 text-left">Completed :</h2>
      <ul class="space-y-4">
        <li class="relative my-20">
          <span class="absolute left-0 top-0 mt-2 ml-2 list-decimal">1.</span>
          <div class="ml-20 space-y-4">
            <div class="flex space-x-24 text-left font-semibold">
              <p class="w-1/6">Name:</p>
              <p class="w-1/6">Assignment notes:</p>
              <p class="w-1/6">Date submitted:</p>
              <p class="w-1/6">Date to be completed by:</p>
              <p class="w-1/6">Grade:</p>
              <p class="w-1/6">Grade notes:</p>
            </div>
            <hr class="mt-4 border-gray-300" />
            <div class="flex space-x-24 text-left">
              <p class="w-1/6">Programming with Python</p>
              <p class="w-1/6">
                Must use python programming language to complete the assignment.
              </p>
              <p class="w-1/6">2024/05/29 10:00</p>
              <p class="w-1/6">2024/06/01 10:00</p>
              <p class="w-1/6">8.46105 out of 10</p>
              <p class="w-1/6">Forgot to import py.math library</p>
            </div>
          </div>
        </li>
        <!-- Add more to-be-completed assignments here, following the same structure -->
        <li class="relative mt-10">
          <span class="absolute left-0 top-0 mt-2 ml-2 list-decimal">1.</span>
          <div class="ml-20 space-y-4">
            <div class="flex space-x-24 text-left font-semibold">
              <p class="w-1/6">Name:</p>
              <p class="w-1/6">Assignment notes:</p>
              <p class="w-1/6">Date submitted:</p>
              <p class="w-1/6">Date to be completed by:</p>
              <p class="w-1/6">Grade:</p>
              <p class="w-1/6">Grade notes:</p>
            </div>
            <hr class="mt-4 border-gray-300" />
            <div class="flex space-x-24 text-left">
              <p class="w-1/6">Programming with Python</p>
              <p class="w-1/6">
                Must use python programming language to complete the assignment.
              </p>
              <p class="w-1/6">2024/05/29 10:00</p>
              <p class="w-1/6">2024/06/01 10:00</p>
              <p class="w-1/6">8.46105 out of 10</p>
              <p class="w-1/6">Forgot to import py.math library</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.custom-list {
  counter-reset: list-counter;
}

.custom-list > li {
  position: relative;
  list-style: none;
}

.custom-list > li::before {
  counter-increment: list-counter;
  content: counter(list-counter) ". ";
  position: absolute;
  left: -2rem; /* Adjust this value to position the numbers */
  top: 0;
}
</style>
<script></script>
