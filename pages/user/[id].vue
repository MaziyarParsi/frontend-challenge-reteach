<template>
  <div class="profile-page-container">
    <div v-if="pending">Loading Profile...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <UserProfileCard v-else :user="user" />
  </div>
</template>

<script setup>
import { useUser } from "~/composables/useUser";

const route = useRoute();
const userId = route.params.id;

const { user, pending, error } = useUser(userId);
</script>

<style scoped>
.profile-page-container {
  max-width: 800px;
  margin: 2rem auto;
}
</style>
