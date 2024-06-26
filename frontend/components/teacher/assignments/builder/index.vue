<template>
  <form
    class="max-w-4xl mx-auto p-8 bg-white shadow-md rounded mt-16 select-none"
  >
    <div class="mb-4">
      <label for="assignmentName" class="block text-gray-700 font-bold mb-2"
        >Name of the assignment*</label
      >
      <input
        type="text"
        id="assignmentName"
        name="assignmentName"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>

    <div class="mb-4">
      <label for="course" class="block text-gray-700 font-bold mb-2"
        >Course*</label
      >
      <select
        id="course"
        name="course"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option>My course 1</option>
        <option>My course 2</option>
        <option>My course 3</option>
      </select>
    </div>

    <div class="mb-4">
      <label for="topic" class="block text-gray-700 font-bold mb-2"
        >Topic*</label
      >
      <select
        id="topic"
        name="topic"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option>My topic 1</option>
        <option>My topic 2</option>
        <option>My topic 3</option>
      </select>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2">Image</label>
      <div class="flex items-center">
        <button
          type="button"
          class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mr-2"
        >
          Upload image
        </button>
        <button
          type="button"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Generate image
        </button>
      </div>
      <div
        class="mt-4 bg-gray-100 h-32 w-full flex items-center justify-center border border-dashed border-gray-300"
      >
        Image preview<br />(Uses course image by default)
      </div>
    </div>

    <div class="mb-4">
      <label for="description" class="block text-gray-700 font-bold mb-2"
        >Description*</label
      >
      <textarea
        id="description"
        name="description"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
      ></textarea>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2">Due dates*</label>
      <div class="flex items-center space-x-4">
        <div>
          <label for="startDate" class="block text-gray-700 font-bold mb-2"
            >Start:</label
          >
          <input
            type="date"
            id="startDate"
            name="startDate"
            class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label for="endDate" class="block text-gray-700 font-bold mb-2"
            >End:</label
          >
          <input
            type="date"
            id="endDate"
            name="endDate"
            class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2"
        >Additional resources</label
      >
      <button
        type="button"
        class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mb-4"
      >
        Upload file
      </button>

      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <span class="mr-4">File_1.jpg</span>
          <button
            type="button"
            class="flex items-center bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
          >
            <Icon name="fa-solid:trash" class="mr-1" />
            Remove
          </button>
        </div>
        <hr class="border-gray-300" />

        <div class="flex items-center justify-between">
          <span class="mr-4">File_2.pdf</span>
          <button
            type="button"
            class="flex items-center bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
          >
            <Icon name="fa-solid:trash" class="mr-1" />
            Remove
          </button>
        </div>
        <hr class="border-gray-300" />

        <div class="flex items-center justify-between">
          <span class="mr-4">File_3.docx</span>
          <button
            type="button"
            class="flex items-center bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
          >
            <Icon name="fa-solid:trash" class="mr-1" />
            Remove
          </button>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add assignment
      </button>
    </div>
  </form>
</template>

<script setup>
// Add any necessary script logic here
</script>
