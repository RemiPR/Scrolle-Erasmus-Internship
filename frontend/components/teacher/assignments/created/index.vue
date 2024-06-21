<template>
  <div class="max-w-4xl mx-auto p-8 bg-white shadow-md rounded mt-16">
    <div class="flex justify-end mb-4">
      <input
        type="text"
        placeholder="Search..."
        class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>

    <table class="w-full table-auto">
      <thead>
        <tr class="bg-gray-200 text-gray-700">
          <th class="py-2 px-4 text-left">Assignment name</th>
          <th class="py-2 px-4 text-left">Start time</th>
          <th class="py-2 px-4 text-left">End time</th>
          <th class="py-2 px-4 text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b">
          <td colspan="4" class="py-2 px-4 font-bold">Course 1</td>
        </tr>
        <tr class="border-b">
          <td class="py-2 px-4">Assignment 1</td>
          <td class="py-2 px-4">2024/06/15 - 15:30</td>
          <td class="py-2 px-4">2024/06/20 - 00:00</td>
          <td class="py-2 px-4 text-right">
            <button class="text-blue-500 hover:underline focus:outline-none">
              Details
            </button>
          </td>
        </tr>
        <tr class="border-b">
          <td class="py-2 px-4">Assignment 2</td>
          <td class="py-2 px-4">Not set</td>
          <td class="py-2 px-4">Not set</td>
          <td class="py-2 px-4 text-right">
            <button class="text-blue-500 hover:underline focus:outline-none">
              Details
            </button>
          </td>
        </tr>

        <tr class="border-b">
          <td colspan="4" class="py-2 px-4 font-bold">Course 2</td>
        </tr>
        <tr class="border-b">
          <td class="py-2 px-4">Assignment 1</td>
          <td class="py-2 px-4">2024/06/11 - 13:15</td>
          <td class="py-2 px-4">2024/06/15 - 00:00</td>
          <td class="py-2 px-4 text-right">
            <button class="text-blue-500 hover:underline focus:outline-none">
              Details
            </button>
          </td>
        </tr>
        <tr class="border-b">
          <td class="py-2 px-4">Assignment 2</td>
          <td class="py-2 px-4">2024/06/05 - 15:30</td>
          <td class="py-2 px-4">2024/06/10 - 00:00</td>
          <td class="py-2 px-4 text-right">
            <button class="text-blue-500 hover:underline focus:outline-none">
              Details
            </button>
          </td>
        </tr>

        <tr>
          <td colspan="4" class="py-2 px-4 font-bold">Course 3</td>
        </tr>
        <tr>
          <td colspan="4" class="py-2 px-4">
            There are no assignments in this course
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
// Add any necessary script logic here
</script>
