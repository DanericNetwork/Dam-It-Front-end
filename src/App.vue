<template>
  <RouterView />
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';

export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView,
  },
};
</script>