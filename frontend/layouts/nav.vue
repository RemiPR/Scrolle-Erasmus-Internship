<template>
  <div>
    <component
      :is="navigationComponent"
      :enableScrollStyling="enableScrollStyling"
    />
  </div>
</template>

<script setup>
const { navigationComponent, enableScrollStyling } = useNavigation();
</script>
