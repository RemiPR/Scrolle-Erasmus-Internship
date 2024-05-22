<template>
  <nav class="flex flex-col w-64 mr-8 text-gray-800 font-semibold">
    <SharedUserProfileCard :user="user" class="mb-8" />
    <div v-for="item in navItems" :key="item.value">
      <SharedUserProfileNavLink
        :activateNav="activateNav"
        :activeNav="activeNav"
        :iconName="item.icon"
        :value="item.value"
      >
        {{ item.label }}
      </SharedUserProfileNavLink>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  navItems: {
    type: Array,
    required: true,
  },
});

const emits = defineEmits(["update-nav"]);
const activeNav = ref("");

const activateNav = (nav) => {
  if (activeNav.value !== nav) {
    activeNav.value = nav;
    emits("update-nav", nav);
  }
};
</script>
