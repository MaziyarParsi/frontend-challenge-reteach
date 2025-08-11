<template>
  <div>
    <h2 class="user-gallery-title">{{ gallery.name }}</h2>
    <div class="gallery">
      <template v-for="img in gallery.photos" :key="img.id">
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
</template>

<script setup>
defineProps({
  gallery: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
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
