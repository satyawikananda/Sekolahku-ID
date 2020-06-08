<template>
  <div class="text-center">
    <v-progress-circular
      indeterminate
      rotate="10"
      size="120"
      width="5"
      color="text"
      class="pa-3"
    >
      {{ loading }}
    </v-progress-circular>
  </div>
</template>
<script>
export default {
  props: ["loading"]
};
</script>
