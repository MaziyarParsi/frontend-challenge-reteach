<template>
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
  <div class="gallery-container">
    <h2>Gallery</h2>
    <div v-if="pending">Loading…</div>
    <div v-else-if="error">Error loading images: {{ error.message }}</div>
    <div v-else>
      <div
        v-if="Object.keys(sortByUser).length !== 0"
        v-for="(userGallery, index) in Object.values(sortByUser)"
        :key="index"
      >
        <hr v-if="index !== 0" />
        <h2 class="user-gallery-title">{{ userGallery.name }}</h2>
        <div class="gallery">
          <template v-for="img in userGallery.photos" :key="img.id">
            <!-- Use NuxtImg for optimized images with lazy loading -->
            <NuxtImg
              :src="img.picture"
              :alt="img.title"
              class="photo"
              width="300"
              height="300"
              sizes="sm:100vw md:50vw lg:300px"
              loading="lazy"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const {
  data: images,
  pending,
  error,
} = await useFetch("/api/gallery", { lazy: true });

const sortByUser = computed(() =>
  images.value.reduce((acc, img) => {
    if (!acc[img.userId]) {
      acc[img.userId] = { name: img.userName, photos: [] };
    }
    acc[img.userId].photos.push(img);
    return acc;
  }, {})
);
console.log("📟 - sortByUser → ", sortByUser);

const users = computed(() => {
  const userMap = [];
  images.value.forEach((img) => {
    if (!userMap[img.userId]) {
      userMap[img.userId] = [];
    }
    userMap[img.userId].push(img);
  });
  return userMap;
});
console.log("📟 - users → ", users);

console.log("📟 - data → ", users);

// const userIds = users.value.results.map((user) => user.login.uuid);
if (error.value) {
  console.error("Failed to load images:", error.value);
}
</script>

<style scoped>
.gallery-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.user-gallery-title {
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.photo {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
