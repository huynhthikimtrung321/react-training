const BASE_API_URL = process.env['BASE_API_URL'] ?? '';

interface PostParams<T> {
  endpoint: string;
  body: Omit<T, 'id'>;
}

interface PutParams<T> {
  endpoint: string;
  id: string;
  body: Omit<T, 'id'>;
}

export const service = {
  post: async <T>({ endpoint, body }: PostParams<T>) => {
    try {
      const res = await fetch(`${BASE_API_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data: T = await res.json();

      return { data, error: null };
    } catch (error) {
      return { data: null, error: 'No data received' };
    }
  },

  put: async <T>({ endpoint, body, id }: PutParams<T>) => {
    try {
      const res = await fetch(`${BASE_API_URL}/${endpoint}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data: T = await res.json();

      return { data, error: null };
    } catch (error) {
      return { data: null, error: 'No data received' };
    }
  },
};
