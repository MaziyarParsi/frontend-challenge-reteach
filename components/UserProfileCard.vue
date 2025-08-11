<template>
  <div v-if="user" class="user-profile-card">
    <h2>{{ user.name }}</h2>
    <p><strong>Username:</strong> {{ user.username }}</p>
    <p>
      <strong>Email:</strong>
      <a :href="`mailto:${user.email}`">{{ user.email }}</a>
    </p>
    <p><strong>Phone:</strong> {{ user.phone }}</p>
    <p>
      <strong>Website:</strong>
      <a :href="`http://${user.website}`" target="_blank">{{ user.website }}</a>
    </p>
  </div>
</template>

<script setup>
defineProps({
  user: {
    type: Object,
    default: null,
  },
});
</script>

<style scoped>
.user-profile-card {
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: #fff;
}
</style>
