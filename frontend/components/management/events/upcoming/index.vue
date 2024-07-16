<template>
  <div class="max-w-6xl mx-auto p-6">
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
    title: "2024 summer graduation ceremony",
    description: "Join us for the 2024 summer graduation ceremony",
    image: "/event2.jpg",
    link: "https://www.turiba.lv/en/news",
  },
  {
    title: "Erasmus+ BIP Wellness Wonderland Program Successfully Concludes",
    description: "Read more",
    image: "/event2.jpg",
    image: "/event.png",
    link: "https://www.turiba.lv/en/news",
  },
  {
    title:
      "Experience of Georgian and Ukrainian students exploring sustainable entrepreneurship topic in Turiba University, Riga, Latvia ",
    description: "Read more",
    image: "/event3.png",
    link: "https://www.turiba.lv/en/news",
  },
  {
    title:
      "Every student of Turība University is invited to apply for the election of the Council",
    description: "Read more",
    image: "/event4.png",
    link: "https://www.turiba.lv/en/news",
  },
];
</script>
