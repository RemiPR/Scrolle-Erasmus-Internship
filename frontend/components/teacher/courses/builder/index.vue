<template>
  <form class="max-w-4xl mx-auto p-8 bg-white shadow-md rounded">
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2">What type of course?*</label>
      <div>
        <label class="inline-flex items-center mr-4">
          <input type="radio" name="courseType" value="students" class="form-radio text-indigo-600" />
          <span class="ml-2">Students course</span>
        </label>
        <label class="inline-flex items-center">
          <input type="radio" name="courseType" value="free" class="form-radio text-indigo-600" />
          <span class="ml-2">Free course</span>
        </label>
      </div>
    </div>

    <div class="mb-4">
      <label for="courseName" class="block text-gray-700 font-bold mb-2">Name of the course*</label>
      <input type="text" id="courseName" name="courseName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>

    <div class="mb-4">
      <label for="category" class="block text-gray-700 font-bold mb-2">Category*</label>
      <select id="category" name="category" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <option>Informatics</option>
        <option>Cosmetology</option>
        <option>Something...</option>
      </select>
    </div>

    <div class="mb-4">
      <label for="language" class="block text-gray-700 font-bold mb-2">Language*</label>
      <select id="language" name="language" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <option>English</option>
        <option>Russian</option>
        <option>Latvian</option>
      </select>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2">Image*</label>
      <div class="flex items-center">
        <button type="button" class="bg-indigo-500 text-white px-4 py-2 rounded mr-2">Upload image</button>
        <button type="button" class="bg-indigo-500 text-white px-4 py-2 rounded">Generate image</button>
      </div>
      <div class="mt-4 bg-gray-100 h-32 w-full flex items-center justify-center border border-dashed border-gray-300">
        Image preview
      </div>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2">Video*</label>
      <div class="flex items-center">
        <button type="button" class="bg-indigo-500 text-white px-4 py-2 rounded mr-2">Upload video</button>
        <button type="button" class="bg-indigo-500 text-white px-4 py-2 rounded">Select pre-uploaded</button>
      </div>
    </div>

    <div class="mb-4">
      <label for="description" class="block text-gray-700 font-bold mb-2">Description*</label>
      <textarea id="description" name="description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"></textarea>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2">Add topics, learning material, assignments etc. now or later?</label>
      <div>
        <label class="inline-flex items-center mr-4">
          <input type="radio" name="addNowOrLater" value="now" class="form-radio text-indigo-600" />
          <span class="ml-2">Yes</span>
        </label>
        <label class="inline-flex items-center">
          <input type="radio" name="addNowOrLater" value="later" class="form-radio text-indigo-600" />
          <span class="ml-2">No</span>
        </label>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <button type="submit" class="bg-indigo-500 text-white px-4 py-2 rounded">Create Course</button>
    </div>
  </form>
</template>

<script setup>


</script>