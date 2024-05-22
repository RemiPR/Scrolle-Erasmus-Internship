<template>
  <div class="flex justify-center min-h-screen bg-white">
    <div class="w-4/6 mx-auto pt-40 pb-32 flex">
      <SharedUserProfileNavMenu
        :user="user"
        :navItems="navItems"
        @update-nav="updateActiveNav"
      />
      <div class="flex-1 ml-4">
        <!-- Dynamic title based on active nav item -->
        <h1 class="text-4xl text-gray-800 font-bold mb-14">
          {{ activeNavItemLabel }}
        </h1>

        <div class="mt-8">
          <SharedUserProfileWrapper
            :activeNav="activeNav"
            :components="components"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "nav",
  navigation: "guest",
  enableScrollStyling: false,
  // middleware: ["auth", "guest"],
});
const user = ref({
  name: "Remi",
  username: "RemiPR",
  email: "remi@example.com",
});

const navItems = ref([
  {
    label: "Public Profile",
    value: "public-profile",
    icon: "ic:baseline-person",
  },
  { label: "Account", value: "account", icon: "ic:baseline-settings" },
]);

const activeNav = ref("public-profile");

// Function to update the active navigation state and synchronize with components
const updateActiveNav = (nav) => {
  activeNav.value = nav;
};

// Computed to fetch the active nav item label
const activeNavItemLabel = computed(() => {
  const item = navItems.value.find((item) => item.value === activeNav.value);
  return item ? item.label : "";
});

const components = {
  "public-profile": defineAsyncComponent(() =>
    import("@/components/guest/profile/Public.vue")
  ),
  account: defineAsyncComponent(() =>
    import("@/components/guest/profile/Settings.vue")
  ),
};
</script>
