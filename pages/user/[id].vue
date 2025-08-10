<template>
  <div>
    <h1>User Profile</h1>
    <div v-if="pending">
      <p>Loading user data...</p>
    </div>
    <div v-else-if="error">
      <p>Could not load user data. Error: {{ error.message }}</p>
    </div>
    <div v-else-if="user">
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Phone:</strong> {{ user.phone }}</p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const userId = route.params.id;

// Use the useFetch composable to get the user data.
// It automatically handles server-side fetching and client-side hydration.
const {
  data: user,
  pending,
  error,
} = await useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
  // Use a key to ensure data is fetched uniquely for each user ID
  key: userId,
});
</script>

<style></style>
