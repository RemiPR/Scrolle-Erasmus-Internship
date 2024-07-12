<template>
  <div class="max-w-6xl mx-auto p-6">
    <h2 class="text-3xl font-semibold text-slate-700 mb-6">
      Erasmus+ Resources
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <NuxtLink
        v-for="(item, index) in erasmusResources"
        :key="index"
        :to="item.link"
        target="_blank"
        class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">
            {{ item.title }}
          </h3>
          <p class="text-gray-600">{{ item.description }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const erasmusResources = [
  {
    title: "Create/Manage OLA",
    description: "Access the Online Learning Agreement platform",
    image: "/erasmus+_ola.png",
    link: "https://learning-agreement.eu/",
  },
  {
    title: "Erasmus+ Student & Staff Mobility",
    description: "Search for staff mobility opportunities",
    image: "/erasmus+_student_and_staff_mobility.png",
    link: "http://staffmobility.eu/staff-week-search",
  },
  {
    title: "Erasmus+ Project Platform",
    description: "Explore Erasmus+ projects and resources",
    image: "/erasmus+_project_platform.png",
    link: "https://erasmusbip.org/",
  },
  {
    title: "Erasmus+ Inter-Institutional Agreements",
    description: "Access tools for inter-institutional agreements",
    image: "/erasmus+_interinstitutional_agreements.png",
    link: "https://erasmus-plus.ec.europa.eu/resources-and-tools/inter-institutional-agreement?facets__field_eac_themes=1996",
  },
];
</script>
