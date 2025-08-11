import { computed } from "vue";
import { useFetch } from "#app";

type Image = {
  userId: string;
  userName: string;
  picture: string;
  id: string;
};

export const useGallery = () => {
  const {
    data: images,
    pending,
    error,
  } = useFetch<Image[]>("/api/gallery", {
    lazy: true,
  });

  // This computed property sorts the raw image list into a gallery grouped by user.
  const galleriesByUser = computed(() => {
    if (!images.value) return {};
    if (!Array.isArray(images.value)) return {};

    // Group photos by userId.
    if (!Array.isArray(images.value)) return {};
    return images.value.reduce((acc: Record<string, any>, img: Image) => {
      if (!acc[img.userId]) {
        acc[img.userId] = { name: img.userName, photos: [] };
      }
      acc[img.userId].photos.push(img);
      return acc;
    }, {});
  });

  return { galleriesByUser, pending, error };
};
