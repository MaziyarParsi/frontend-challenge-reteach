<!--
    Recommendations for Improving Gallery Performance:
    
    1. The Principle of Visibility: Don't load what the user can't see.
    2. The Principle of Efficiency: Send the smallest possible image that still looks good.

    Future Recommendations for Scaling:

    1. Implement Pagination:
       - For very large galleries, modify the API to send data in chunks (pages).
       - This keeps the initial data load small and performance consistent,
         regardless of the total number of images.

    2. Implement Virtual Scrolling:
       - For an "infinite scroll" experience, a virtual scroller only renders the
         DOM elements for images currently in the viewport.

    3. Use Image Placeholders (LQIP - Low-Quality Image Placeholders):
       - To improve perceived performance and prevent layout shift, show a
         tiny, blurred version of the image while the full-quality version
         loads in the background.
  -->
<template>
  <div class="gallery-container">
    <h2>Gallery</h2>
    <div v-if="pending">Loading…</div>
    <div v-else-if="error">Error loading images: {{ error.message }}</div>
    <div v-else>
      <template
        v-for="(userGallery, index) in Object.values(galleriesByUser)"
        :key="userGallery.name"
      >
        <hr v-if="index !== 0" />
        <UserPhotoGallery :gallery="userGallery" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { useGallery } from "~/composables/useGallery";
const { galleriesByUser, pending, error } = useGallery();
</script>

<style scoped>
.gallery-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
