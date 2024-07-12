<template>
  <div>
    <SharedCardSection
      id="trending"
      title="Trending"
      :dataArray="trending"
      :hiddenContent="false"
      :playVideo="false"
      class="pb-12"
    />
    <div>
      <p class="text-3xl font-bold">Your schedule for today:</p>
      <ul class="text-xl space-y-4 mt-10">
        <li class="">
          <span class="font-bold mr-8">09:00 - 10:30</span>
          <span
            >Advanced Aesthetic Cosmetology lecture in
            <strong>301 aud. I19-2</strong> group</span
          >
        </li>
        <li class="">
          <span class="font-bold mr-8">10:45 - 12:15</span>
          <span
            >Advanced Aesthetic Cosmetology lecture in
            <strong>301 aud. I20-2</strong> group</span
          >
        </li>
        <li class="">
          <span class="font-bold mr-8">12:15 - 13:15</span>
          <span>Lunch break</span>
        </li>
        <li class="">
          <span class="font-bold mr-8">13:25 - 13:45</span>
          <span>Meeting with Head of Department</span>
        </li>
        <li class="">
          <span class="font-bold mr-8">15:00 - 16:30</span>
          <span
            >Advanced Aesthetic Cosmetology lecture in
            <strong>301 aud. I21-2</strong> group</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const trending = ref([
  {
    id: 1,
    title: "Top 10 cosmetology hacks",
    imageUrl: "/trending_dummy.jpg",
    imageUrlLowRes: "/low_res_trending_dummy.jpg",
  },
]);
</script>

<style scoped></style>
