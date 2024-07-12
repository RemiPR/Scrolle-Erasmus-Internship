<template>

  <div>
    <TeacherModalAddtopic @close="toggleModal" :modalActive="modalActive" />
    <form
      class="max-w-4xl mx-auto p-8 bg-white shadow-md rounded mt-16 select-none"
    >
    <div class="mb-4"> 
          <span class="block text-gray-700 font-bold mb-2">What type of test?</span>
          <label class="inline-flex items-center mr-4">
            <input
              type="radio"
              name="typeOfTest"
              value="class"
              class="form-radio text-indigo-600"
              v-model="typeOfTest"
            />
            <span class="ml-2">Class</span>
          </label>
          <label class="inline-flex items-center mr-4">
            <input
              type="radio"
              name="typeOfTest"
              value="virtual"
              class="form-radio text-indigo-600"
              v-model="typeOfTest"
            />
            <span class="ml-2">Virtual</span>
          </label>
          <label class="inline-flex items-center">
            <input
              type="radio"
              name="typeOfTest"
              value="final"
              class="form-radio text-indigo-600"
              v-model="typeOfTest"
            />
            <span class="ml-2">Final exam</span>
          </label>
      </div>
      <div class="mb-4">
        <label for="testName" class="block text-gray-700 font-bold mb-2"
          >Name of the test*</label
        >
        <input
          v-model="testName"
          type="text"
          id="testName"
          name="testName"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div class="mb-4">
        <label for="course" class="block text-gray-700 font-bold mb-2"
          >Course*</label
        >
        <select
          v-model="selectedCourse"
          id="course"
          name="course"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option v-for="course in courses" :key="course" :value="course">
            {{ course }}
          </option>
        </select>
      </div>

      <div class="mb-4">
        <label for="topic" class="block text-gray-700 font-bold mb-2"
          >Topic</label
        >
        <select
          v-model="selectedTopic"
          id="topic"
          name="topic"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          @change="addNewTopic"
        >
          <option v-for="topic in topics" :key="topic" :value="topic">
            {{ topic }}
          </option>
          <option>Add new topic...</option>
        </select>
      </div>

      <div class="mb-4">
        <label for="description" class="block text-gray-700 font-bold mb-2"
          >Description*</label
        >
        <button
            type="button"
            class="bg-blue-600 hover:bg-blue-700 text-white mb-2 px-4 py-2 rounded"
          >
            Generate description
        </button>
        <textarea
          v-model="description"
          id="description"
          name="description"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          required
        ></textarea>
      </div>

      <div class="w-fit mb-4">
          <label for="startDateTime" class="block text-gray-700 font-bold mb-2"
            >Start date/time</label
          >
          <input
            v-model="startDateTime"
            type="datetime-local"
            id="startDateTime"
            name="startDateTime"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

      <div class="flex space-x-4">
        <div> 
          <span class="block text-gray-700 font-bold mb-2">Add time limit to each question?</span>
          <label class="inline-flex items-center mr-4">
            <input
              type="radio"
              name="questionTimeLimit"
              value="yes"
              class="form-radio text-indigo-600"
              v-model="questionTimeLimit"
            />
            <span class="ml-2">Yes</span>
          </label>
          <label class="inline-flex items-center">
            <input
              type="radio"
              name="questionTimeLimit"
              value="no"
              class="form-radio text-indigo-600"
              v-model="questionTimeLimit"
            />
            <span class="ml-2">No</span>
          </label>
      </div>
      <div class="w-fit mb-4">
        <label for="duration" class="block text-gray-700 font-bold mb-2"
          >Total duration in minutes</label
        >
        <input
          v-model="duration"
          type="number"
          id="duration"
          name="duration"
          placeholder="30"
          class="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :disabled="questionTimeLimit === 'yes'"
        />
      </div>
      </div>

      <div class="mb-4">
        <div class="mb-4"> 
          <span class="block text-gray-700 font-bold mb-2">Generate questions with AI?</span>
          <label class="inline-flex items-center mr-4">
            <input
              type="radio"
              name="questionsAi"
              value="yes"
              class="form-radio text-indigo-600"
              v-model="questionsAi"
            />
            <span class="ml-2">Yes</span>
          </label>
          <label class="inline-flex items-center">
            <input
              type="radio"
              name="questionsAi"
              value="no"
              class="form-radio text-indigo-600"
              v-model="questionsAi"
            />
            <span class="ml-2">No</span>
          </label>
        </div>
        <Transition>
          <div class="mb-4" v-show="questionsAi === 'yes'">
            <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >Generate questions with AI</button>
            <textarea
              id="prompt"
              name="prompt"
              class="shadow appearance-none border rounded w-full mt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              placeholder="Enter the prompt for the AI to generate questions... For example, 'Create 10 questions about the solar system.'"
            />
          </div>
        </Transition>
        <label class="block text-gray-700 font-bold mb-4">Questions*</label>
        <Transition>
        <div v-if="questionTimeLimit === 'yes'" class="w-fit">
          <label for="duration" class="block text-gray-700 font-bold mb-2"
            >Time limit for each question</label
          >
          <input
            v-model="timeLimitForEachQuestion"
            type="number"
            id="timeLimitForEachQuestion"
            name="timeLimitForEachQuestion"
            min="0"
            class="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            @input="applyTimeLimitForEachQuestion"
          />
        </div>
        </Transition>
        <div
          v-for="(question, index) in questions"
          :key="question.id"
          class="mt-4 p-4 border rounded-md bg-gray-50"
        >
          <div class="flex justify-between items-center mb-2">
            <h3 class="text-lg font-medium">Question {{ index + 1 }}</h3>
            <button
              type="button"
              @click="removeQuestion(question.id)"
              class="text-red-600 hover:text-red-800"
            >
              ×
            </button>
          </div>
          <Transition>
            <div v-if="questionTimeLimit === 'yes'">
              <input
              type="number"
              min="0"
              class="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              placeholder="Limit"
              v-model="question.timeLimit"
              />
              <label class="text-gray-700 mb-2"> minutes</label>
            </div>
          </Transition>
          <input
            v-model="question.text"
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            placeholder="Enter your question here..."
          />
          <div
            v-for="option in question.options"
            :key="option.id"
            class="flex items-center space-x-2 mb-2"
          >
            <span class="font-bold">{{ option.id }}</span>
            <input
              v-model="option.text"
              type="text"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="button"
              @click="removeOption(question.id, option.id)"
              class="text-red-600 hover:text-red-800"
            >
              ×
            </button>
          </div>
          <button
            type="button"
            @click="addOption(question.id)"
            class="mt-2 text-blue-600 hover:text-blue-800"
          >
            + Add Option
          </button>
        </div>
        <div class="mt-6 flex justify-center">
          <button
            type="button"
            @click="addNewQuestion"
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            ADD NEW QUESTION<span>+</span>
          </button>
        </div>

        <div class="border-t border-gray-300 pt-6 mt-6">
          <div class="flex justify-center">
            <button
              type="submit"
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            >
              Finish & Create Test
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, watchEffect } from "vue";
//import TeacherModalAddtopic from "@/components/teacher/modal/addtopic/index.vue";

const typeOfTest = ref("class");
const questionsAi = ref("no");
const questionTimeLimit = ref("no");
const timeLimitForEachQuestion = ref(0);
const testName = ref("");
const selectedCourse = ref("My course 1");
const selectedTopic = ref("My topic 1");
const description = ref("");
const startDateTime = ref("2024-06-01T08:30");
const duration = ref(0);
const questions = reactive([
  {
    id: 1,
    text: "",
    options: [
      { id: "A", text: "" },
      { id: "B", text: "" },
    ],
  },
  {
    id: 2,
    text: "",
    options: [
      { id: "A", text: "" },
      { id: "B", text: "" },
      { id: "C", text: "" },
    ],
  },
]);

const modalActive = ref(false);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};

const courses = ["My course 1", "My course 2", "My course 3"];
const topics = ["My topic 1", "My topic 2", "My topic 3"];

const addNewTopic = () => {
  if(selectedTopic.value === "Add new topic...") {
    toggleModal();
    selectedTopic.value = "My topic 1";
    /*
    const newTopic = prompt("Enter the new topic name:");
    if (newTopic) {
      topics.push(newTopic);
      selectedTopic.value = newTopic;
    }*/
  }
};

watchEffect(() => {
  if (questionTimeLimit.value === "yes") {
    
    duration.value = 0;
    questions.forEach(element => {
       duration.value = duration.value + (element.timeLimit || 0);
    });
  }
});

const applyTimeLimitForEachQuestion = () => {
  questions.forEach((q) => {
    q.timeLimit = timeLimitForEachQuestion.value;
  });
};

const addNewQuestion = () => {
  const newId = questions.length + 1;
  questions.push({
    id: newId,
    text: "",
    timeLimit: timeLimitForEachQuestion.value || 0,
    options: [
      { id: "A", text: "" },
      { id: "B", text: "" },
    ],
  });
};

const removeQuestion = (questionId) => {
  const index = questions.findIndex((q) => q.id === questionId);
  if (index !== -1) {
    questions.splice(index, 1);
  }
};

const addOption = (questionId) => {
  const question = questions.find((q) => q.id === questionId);
  if (question) {
    const newOptionId = String.fromCharCode(65 + question.options.length);
    question.options.push({ id: newOptionId, text: "" });
  }
};

const removeOption = (questionId, optionId) => {
  const question = questions.find((q) => q.id === questionId);
  if (question) {
    const index = question.options.findIndex((o) => o.id === optionId);
    if (index !== -1) {
      question.options.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease, max-height 0.5s ease;
  max-height: 180px; 
  overflow: hidden;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-20px);
  max-height: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 180px;
}
</style>
