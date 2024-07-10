<template>
  <div class="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-4">
    <div class="flex flex-col sm:flex-row justify-between py-6 px-2">
      <input
        type="text"
        v-model="searchTerm"
        :placeholder="$t('search')"
        class="mb-2 sm:mb-0 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full sm:w-64"
      />
      <div class="flex flex-wrap gap-2">
        <select
          v-model="selectedSubject"
          class="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">{{ $t("allSubjects") }}</option>
          <option v-for="subject in subjects" :key="subject" :value="subject">
            {{ subject }}
          </option>
        </select>
        <select
          v-model="selectedResourceType"
          class="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">{{ $t("allResourceTypes") }}</option>
          <option v-for="type in resourceTypes" :key="type" :value="type">
            {{ type }}
          </option>
        </select>
        <select
          v-model="selectedLanguage"
          class="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">{{ $t("allLanguages") }}</option>
          <option v-for="lang in languages" :key="lang" :value="lang">
            {{ lang }}
          </option>
        </select>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full table-auto">
        <thead>
          <tr class="bg-gray-200 text-gray-700">
            <th
              v-for="header in tableHeaders"
              :key="header"
              class="py-3 px-4 text-left font-semibold whitespace-nowrap"
            >
              {{ $t(header) }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="resource in filteredResources"
            :key="resource.id"
            class="border-b hover:bg-gray-100 cursor-pointer"
            @click="openResourceDetails(resource)"
          >
            <td v-for="key in tableKeys" :key="key" class="py-3 px-4">
              {{ resource[key] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <TeacherDigitalLibraryModal
      v-if="selectedResource"
      :resource="selectedResource"
      @close="closeResourceDetails"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Mock data - replace this with actual data from your API or store
const resources = ref([
  {
    id: 1,
    title: "Introduction to Quantum Mechanics",
    subject: "Physics",
    subTopic: "Quantum Physics",
    resourceType: "Lecture Notes",
    author: "Dr. Jane Smith",
    institution: "University of Science",
    language: "English",
    publishDate: "2023-05-15",
    abstract:
      "This lecture note provides an introduction to the fundamental concepts of quantum mechanics, including wave-particle duality, the Schrödinger equation, and quantum states.",
  },
  {
    id: 2,
    title: "The French Revolution: Causes and Consequences",
    subject: "History",
    subTopic: "European History",
    resourceType: "Video Lecture",
    author: "Prof. Pierre Dubois",
    institution: "Sorbonne University",
    language: "French",
    publishDate: "2023-03-22",
    abstract:
      "This video lecture explores the complex factors that led to the French Revolution and its far-reaching impact on European politics and society in the following centuries.",
  },
  {
    id: 3,
    title: "Introduction to Machine Learning Algorithms",
    subject: "Computer Science",
    subTopic: "Artificial Intelligence",
    resourceType: "Interactive Tutorial",
    author: "Dr. Maria Rodriguez",
    institution: "MIT",
    language: "English",
    publishDate: "2023-06-01",
    abstract:
      "This interactive tutorial introduces students to fundamental machine learning algorithms, including supervised and unsupervised learning techniques, with hands-on coding exercises.",
  },
  {
    id: 4,
    title: "Экологические проблемы современности",
    subject: "Environmental Science",
    subTopic: "Global Warming",
    resourceType: "Research Paper",
    author: "Др. Алексей Иванов",
    institution: "Московский государственный университет",
    language: "Russian",
    publishDate: "2023-04-10",
    abstract:
      "Эта научная статья анализирует текущие экологические проблемы, уделяя особое внимание глобальному потеплению и его влиянию на различные экосистемы по всему миру.",
  },
  {
    id: 5,
    title: "Modernās mākslas vēsture",
    subject: "Art History",
    subTopic: "Modern Art",
    resourceType: "E-book",
    author: "Anna Bērziņa",
    institution: "Latvijas Mākslas akadēmija",
    language: "Latvian",
    publishDate: "2023-02-28",
    abstract:
      "Šī e-grāmata sniedz visaptverošu pārskatu par modernās mākslas vēsturi, sākot no impresionisma līdz pat mūsdienu mākslas tendencēm, analizējot nozīmīgākos māksliniekus un kustības.",
  },
]);

const searchTerm = ref("");
const selectedSubject = ref("");
const selectedResourceType = ref("");
const selectedLanguage = ref("");
const selectedResource = ref(null);

const subjects = computed(() => [
  ...new Set(resources.value.map((r) => r.subject)),
]);
const resourceTypes = computed(() => [
  ...new Set(resources.value.map((r) => r.resourceType)),
]);
const languages = computed(() => [
  ...new Set(resources.value.map((r) => r.language)),
]);

const tableHeaders = [
  "title",
  "subject",
  "resourceType",
  "author",
  "institution",
  "language",
  "publishDate",
];
const tableKeys = [
  "title",
  "subject",
  "resourceType",
  "author",
  "institution",
  "language",
  "publishDate",
];

const filteredResources = computed(() => {
  return resources.value.filter((resource) => {
    const matchesSearch = Object.values(resource).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.value.toLowerCase())
    );
    const matchesSubject =
      !selectedSubject.value || resource.subject === selectedSubject.value;
    const matchesResourceType =
      !selectedResourceType.value ||
      resource.resourceType === selectedResourceType.value;
    const matchesLanguage =
      !selectedLanguage.value || resource.language === selectedLanguage.value;

    return (
      matchesSearch && matchesSubject && matchesResourceType && matchesLanguage
    );
  });
});

function openResourceDetails(resource) {
  selectedResource.value = resource;
}

function closeResourceDetails() {
  selectedResource.value = null;
}
</script>

<style scoped>
table {
  table-layout: fixed;
}

th,
td {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
