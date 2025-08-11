import { useFetch } from "#app";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export const useUser = (userId: string) => {
  if (!userId) {
    return { user: ref(null), pending: ref(false), error: ref(null) };
  }

  const {
    data: user,
    pending,
    error,
  } = useFetch<User>(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    key: `user-${userId}`,
  });

  return { user, pending, error };
};
